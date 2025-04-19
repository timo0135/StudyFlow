# backend/Dockerfile
FROM python:3.13

# Installer les dépendances
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copier le code source
COPY . .

# Exposer le port de l'API FastAPI
EXPOSE 8000

# Commande pour démarrer l'application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

