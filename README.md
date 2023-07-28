<h1>Portfolio </h1>

<h2>Instruction d'installation et d'utilisation</h2>

- Installer Visual Studio Code.
- Avoir un terminal en bash.
- Récupérer le lien du repo SSH.
- Dans le terminal cloner le repo git git clone (mettre lien ssh) p6.
- React est une application donc pour le creer il faut faire cette commande : `npx create-react-app my-app `.
- Entrer dans le dossier `cd frontend`.
- Lancer l'application `npm start`
- Ouvrez un autre terminal (raccourci mac cmd + n)
- Dans l'application React installer Sass `npm install sass --save`.
- Installer react router `npm install react-router-dom`.



<h2>Instruction de lancement (backend)</h2>

Pour la base de donnée :

- Se connecter sur MongoDB Atlas
- Crée un projet sur MongoDB Atlas
- Crée une base de donnée : Database > Create
- Crée un cluster pour définir une route pour la base de donnée :
- Connect > Connect to your application > Drivers > Add your connection string into your application code
- Changer l'uri du cluster en ajoutant le nom de la base de donnée mongodb+srv://<userDB>:<passwordDB>@<clusterDB>.mongodb.net/?retryWrites=true&w=majority
- Data access : définir un utilisateur avec les droits d'écriture et de lecture

Dans le terminal :

- Récupérer le dépôt en local git clone lien-ssh nom-du-projet.
- Entrer dans le dossier cd nom-du-projet.
- Crée un dossier backend mkdir backend
- Entrer dans le dossier cd backend.
- Insérer une base de paquet JSON package.json
- Installer les dépendances express/nodemon/etc npm i express

⚠ Toujours lancer le serveur backend avant le frontend pour éviter les erreurs de récupération de donnée



# Portfolio-2.0
Le site rassemble la base de mes compétences en tant que développeur web

<h2>Création du projet </h2>

Ce projet sera réaliser en MERN.js (MongoDB, Express.js,React.js,Node.js) et Sass. Je réaliserais la partie frontend et backend

Pour la partie base de donnée avec MongoDB Atlas:
- Créer une base de donnée
- Définir un nom d'utilisateur et mot de passe pour se connecter à la base de donnée
- Sélectionner cloud pour un hébergement en ligne
- Si ce n'est pas déjà le cas ajouter un utilisateur dans Database Access avec droit de lecture et d'écriture
- Définir une adresse IP

Pour la partie backend :

- Ouvrez un terminal
- Crée un dossier backend dans le dépôt `mkdir backend`
- Accéder au dossier backend `cd backend`
- Pour créer le package.json qui contiendra les dépendances faite la commande `npm init -y`
- Faire un .gitignore et y écrire node_module voir récupérer dans le frontend le contenu du .gitignore
- Installer les dépendances avec la commande `npm i dotenv express mongodb mongoose` 
- Pour pouvoir lancer le serveur backend avec la commande `npm start`il faut ecrire dans le package.json  dans les accolades de la partie "script" il faut ajouter "start" : "nodemon index.js"

Pour la partie frontend :

- Ouvrez un nouveau terminal
- Dans le dépôt utiliser la commande `npx create-react-app frontend`
- Entrer dans le dossier `cd frontend`
- Lancer le projet avec la commande `npm start`

Récupération et lancement de l'application :

- Récupérer le dépôt `git clone clé-ssh nom du dossier`
- Accéder au backend `cd backend`
- Installer les dépendances `npm i`
- Lancer le serveur backend `npm start`
- Ouvrez un nouveau terminal
- Accéder au chemin du dossier source
- Accéder au frontend `cd frontend`
- Installer les dépendances `npm i`
- Lancer le serveur frontend `npm start`
