#!/bin/bash

# Installer les dépendances
yarn install

# Construire et démarrer les conteneurs Docker
docker-compose up --build