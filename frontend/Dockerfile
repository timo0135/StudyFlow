# frontend/Dockerfile
FROM node:20

# Initialiser le projet Vue.js
WORKDIR /app
COPY package*.json ./
RUN npm install

# Assurer que vite est installé
RUN npm install -g vite

# Copier le code source
COPY . .

# Exposer le port pour Vue.js
EXPOSE 5173

# Commande pour démarrer l'application en mode dev
CMD ["npm", "run", "dev", "--", "--host"]
