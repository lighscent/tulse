# Tulse

Tulse est une application web personnelle tout-en-un qui vous permet de gérer votre contenu multimédia et vos services en ligne.

## 🎯 Fonctionnalités

- 🎵 **Streaming Musical**
  - Upload et gestion de votre bibliothèque musicale
  - Lecteur web intégré
  - Organisation par playlists, artistes, albums

## 🚀 Technologies

- Backend: Node.js avec Express
- Base de données: SQLite3
- Conteneurisation: Docker
- Frontend: HTML5

## 📋 Prérequis

- Node.js (v18+)
- Yarn
- Docker & Docker Compose
- Espace disque selon vos besoins de stockage

## 🛠️ Installation

1. Clonez le repository
```bash
git clone https://github.com/lighscent/tulse.git tulse
cd tulse
```

2. Configurez les variables d'environnement
```bash
cp .env.example .env
# Modifiez .env avec vos paramètres
```

3. Lancez l'application
```bash
chmod +x start.sh
./start.sh
```

## ⚙️ Configuration

### Variables d'Environnement

| Variable           | Description                    | Défaut        |
|-------------------|--------------------------------|---------------|
| PORT              | Port du serveur                | 2204          |
| STORAGE_PATH      | Chemin de stockage des médias  | ./storage     |
| MAX_UPLOAD_SIZE   | Taille max upload              | 100mb        |

### Stockage

Le stockage des fichiers se fait dans le dossier `storage/` avec la structure suivante:
```
storage/
├── music/
├── videos/
├── cloud/
└── temp/
```

## 🔐 Sécurité

- Authentification requise pour toutes les routes
- Chiffrement des fichiers stockés
- Limitation de débit par IP
- Protection contre les attaques courantes

## 🚧 Roadmap

- []

## 🤝 Contribution

Les contributions sont les bienvenues ! Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

## 📝 License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## ⚠️ Avertissement

Cette application est destinée à un usage personnel. Assurez-vous de respecter les droits d'auteur lors de l'utilisation de contenus médias.