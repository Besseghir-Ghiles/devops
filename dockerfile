# Utiliser une image de base officielle de nginx
FROM nginx:alpine

# Copier le fichier index.html dans le répertoire de nginx
COPY index.html /usr/share/nginx/html/index.html
