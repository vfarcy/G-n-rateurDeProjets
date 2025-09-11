# Cap Projets 4A 2025-2026

**L'Ingénierie du Numérique au service des Grands Défis.**

## 🎯 Description du Projet

Ce projet est une application web monopage conçue pour présenter de manière interactive et détaillée les six grands thèmes de projets de la 4ème année. Il a pour objectif de guider les étudiants ingénieurs en informatique dans leur choix de projet en leur fournissant une vue d'ensemble claire des défis, de leurs impacts potentiels et en leur proposant des idées concrètes générées par l'intelligence artificielle.

## 🚀 Fonctionnalités

* **Présentation des Thématiques :** Une interface moderne et défilante qui présente les six grands défis de société. Chaque thème est accompagné d'une brève description du défi à relever et de son impact positif.
* **Générateur d'Idées de Projets :** Un outil intégré propulsé par l'API Gemini de Google. Les étudiants peuvent sélectionner un thème et générer des suggestions de projets uniques et détaillées en un clic.
* **Détails du Projet :** Pour chaque idée générée, l'application fournit un ensemble d'informations cruciales :
    * Un descriptif détaillé du problème à résoudre.
    * Les objectifs précis du projet.
    * Les livrables techniques et de gestion de projet attendus.
    * Les technologies principales recommandées.
    * Un planning sur 11 semaines.
* **Répartition des Compétences :** Un graphique à barres pour chaque idée de projet évalue la répartition des charges de travail entre cinq domaines techniques clés : **Software Engineering**, **IA et Data Science**, **IoT et Capteurs**, **Cybersécurité**, et **Réalité Virtuelle et Systèmes Immersifs**.

## 💻 Technologies Utilisées

* **HTML5 :** Pour la structure de la page.
* **Tailwind CSS :** Pour le style de l'interface utilisateur, la réactivité et la conception visuelle.
* **JavaScript (ES6+) :** Pour la logique interactive de l'application, y compris la navigation et l'interaction avec l'API.
* **Chart.js :** Une bibliothèque JavaScript pour créer les graphiques à barres dynamiques.
* **Google Gemini API :** Pour la génération des idées de projets.

---

## 🛠️ Démarrage

Suivez ces étapes pour démarrer le projet sur votre machine locale.

### Prérequis

* Un éditeur de code (comme VS Code).
* Un navigateur web moderne (Chrome, Firefox, Edge, etc.).
* Une clé d'API pour le modèle Gemini de Google. Vous pouvez l'obtenir via la console Google AI Studio.


### Installation

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre-utilisateur/votre-depot.git](https://github.com/votre-utilisateur/votre-depot.git)
    cd votre-depot
    ```

2.  **Déploiement de l'API sur Vercel.com (gestion sécurisée de la clé API) :**
    - Rendez-vous sur [vercel.com](https://vercel.com/) et importez ce projet (ou le dossier `api/`).
    - Dans le tableau de bord Vercel, accédez à l'onglet **Settings > Environment Variables** de votre projet.
    - Ajoutez une variable d'environnement nommée `GEMINI_API_KEY` et collez-y votre clé API Gemini (obtenue via Google AI Studio).
    - Déployez le projet. L'API sera alors accessible à l'adresse `https://votre-projet.vercel.app/api/generate-ideas` et la clé ne sera jamais exposée côté client.
    - **Ne commitez jamais votre clé API dans le code source.**

3.  **Configuration du front-end :**
    - Ouvrez le fichier `index.html` et vérifiez que l'URL de l'API (`apiUrl`) pointe bien vers votre déploiement Vercel, par exemple :
      ```javascript
      const apiUrl = 'https://votre-projet.vercel.app/api/generate-ideas';
      ```

4.  **Lancer l'application :**
    - Ouvrez simplement le fichier `index.html` dans votre navigateur web.

---

## 🧭 Utilisation

* **Navigation :** Faites défiler la page pour parcourir les différentes thématiques et découvrir les enjeux.
* **Générateur d'Idées :** Sélectionnez un thème dans la liste déroulante et cliquez sur le bouton "Générer des Idées". Les suggestions de projets apparaîtront en dessous.

## 🤝 Contribution

Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir des *issues* pour signaler des bugs ou suggérer des fonctionnalités.

## 📄 Licence

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier `LICENCE`.

---

N'hésitez pas si vous avez d'autres questions !
