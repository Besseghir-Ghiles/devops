# Utiliser l'image officielle de nginx comme image de base
FROM nginx:alpine

# Copier les fichiers de l'application web dans le répertoire par défaut de nginx
COPY . /usr/share/nginx/html

# Exposer le port sur lequel nginx écoute
EXPOSE 80

# Commande pour démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
