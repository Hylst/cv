# Utiliser une image Nginx légère
FROM nginx:alpine

# Copier les fichiers du site web dans le répertoire par défaut de Nginx
COPY . /usr/share/nginx/html

# Copier une configuration Nginx personnalisée (optionnel mais recommandé pour les SPA ou la gestion du cache)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
