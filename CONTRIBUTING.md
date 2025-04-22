# Guide de Contribution

Merci de votre intérêt pour contribuer à Tulse ! Ce document fournit les lignes directrices pour contribuer au projet.

## 📝 Process de Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add: Amazing Feature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 🏗️ Structure du Projet

```
tulse/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
├── tests/
├── storage/
└── config/
```

## 🐛 Signalement de Bugs

Créez une issue avec:
- Description détaillée
- Étapes de reproduction
- Comportement attendu vs actuel
- Screenshots si pertinent
- Configuration système

## 💡 Propositions de Fonctionnalités

Créez une issue avec:
- Description détaillée
- Cas d'utilisation
- Bénéfices attendus
- Alternatives considérées

## ⚖️ License

En contribuant, vous acceptez que vos contributions soient sous la même licence que le projet (MIT).

## 🤝 Code de Conduite

- Soyez respectueux
- Acceptez les critiques constructives
- Focus sur ce qui est meilleur pour la communauté
- Faites preuve d'empathie

## 🔧 Configuration de l'Environnement

```bash
# Clone du projet
git clone https://github.com/[your-username]/tulse.git
cd tulse

# Installation des dépendances
yarn install

# Configuration des variables d'environnement
cp .env.example .env

# Démarrage en développement
yarn dev
```

---

📝 Note: Ce guide évoluera avec le projet. Vérifiez régulièrement les mises à jour.
