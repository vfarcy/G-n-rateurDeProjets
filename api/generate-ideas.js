import fetch from 'node-fetch';

// L'exportation par défaut d'une fonction 'handler' est le standard de Vercel.
export default async function handler(request, response) {
  // Extraction des données du corps de la requête.
  // 'prompt' est le texte à envoyer à l'IA, 'schema' est la structure JSON attendue.
  const { prompt, schema } = request.body;
  
  // Récupération de la clé d'API depuis les variables d'environnement de Vercel.
  const apiKey = process.env.GEMINI_API_KEY;

  // Vérification de la présence de la clé d'API pour éviter les erreurs 401.
  if (!apiKey) {
    // Si la clé n'est pas trouvée, renvoyer une erreur interne.
    return response.status(500).json({ error: 'Clé d\'API non configurée.' });
  }

  // Construction de l'URL de l'API de Gemini avec la clé d'API.
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  try {
    // Envoi de la requête sécurisée à l'API de Gemini.
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema
        }
      })
    });

    // Gestion des erreurs HTTP de l'API de Gemini.
    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      return response.status(geminiResponse.status).json({ error: `Erreur de l'API Gemini: ${errorText}` });
    }

    // Récupération et renvoi de la réponse de l'API.
    const data = await geminiResponse.json();
    return response.status(200).json(data);

  } catch (error) {
    // Gestion des erreurs internes du serveur proxy.
    console.error(error);
    return response.status(500).json({ error: 'Erreur interne du serveur.' });
  }
}

