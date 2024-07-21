# Installation 

1- Clone le projet:

  git clone https://github.com/Besseghir-Ghiles/devops.git
 
2- Installation des dépendences:
  npm install 

# Lancement :

Pour lancer l'application on exécute :
  node server.js

# Docker :
Pour construire et exécuter le conteneur Docker en suit les étapes suivantes :

# Création de l'image Docker :
  docker build -t ghilesbesseghir039469/todo-app:latest .

# Exécution du conteneur Docker :
  docker run -p ghilesbesseghir039469/todo-app:latest

# Configurer GitHub Actions :
# Pipeline CI/CD
Pour automatiser le pipeline CD/CD on utilise Github Actions, le Pipeline éffectue les étapes suivantes : 
  * Test : Exécuter les tests écrits à chaque push.
  * Build : Construire l'image Docker si les tests passent.
  * Déploiement : Pousser l'image Docker sur Docker Hub.

  


