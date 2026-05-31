# 🤖 Assistant IA Local

Un assistant IA conversationnel qui tourne **entièrement en local** sur ton PC, sans connexion internet et sans envoyer de données à l'extérieur.

## ✨ Fonctionnalités

- 💬 **Mode Normal** — Conversation libre avec l'IA
- 📝 **Mode Résumé** — Résume n'importe quel texte en 3 points clés
- 🌍 **Mode Traduction** — Traduit un texte en français
- ✅ **Mode Correction** — Corrige les fautes d'orthographe et de grammaire
- 💾 **Historique de conversation** — L'IA se souvient du contexte
- 🗑️ **Nouvelle conversation** — Réinitialise le contexte en un clic
- 📋 **Copier une réponse** — Copie la réponse de l'IA en un clic

## 🛠️ Technologies utilisées

| Technologie | Rôle |
|---|---|
| **Ollama** | Moteur IA local (llama3.2) |
| **Node.js** | Environnement d'exécution JavaScript |
| **Express.js** | Serveur web backend |
| **HTML/CSS/JS** | Interface utilisateur frontend |

## 🏗️ Architecture

Navigateur (HTML/CSS/JS)
↓ POST /chat
Serveur Express (Node.js)
↓ API REST
Ollama (llama3.2 en local)

## 🚀 Installation et lancement

### Prérequis
- [Node.js](https://nodejs.org) v18+
- [Ollama](https://ollama.com) installé

### Étapes

1. Clone le dépôt
```bash
git clone https://github.com/koamidzakpata/assistant-ia-local.git
cd assistant-ia-local
```

2. Installe les dépendances
```bash
npm install
```

3. Télécharge le modèle IA
```bash
ollama pull llama3.2
```

4. Lance le serveur
```bash
node server.js
```

5. Ouvre ton navigateur sur **http://localhost:3000**

## 💡 Prompt Engineering

Chaque mode utilise un prompt système spécifique :

- **Résumé** : *"Tu es un expert en synthèse. Résume le texte suivant en 3 points clés..."*
- **Traduction** : *"Traduis le texte suivant en français correct et naturel..."*
- **Correction** : *"Corrige les fautes d'orthographe et de grammaire..."*

## 👨‍💻 Auteur

**DZAKPATA Koami Junior**  
Master IA & Big Data — UCAO-UUT  
[GitHub](https://github.com/koamidzakpata)