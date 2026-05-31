// server.js

const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.use(express.json())
app.use(express.static('.'))

app.post('/chat', async (req, res) => {
    const { message, historique } = req.body
    console.log('📩 Message reçu :', message)

    // Construire le contexte complet de la conversation
    let contexte = ''
    if (historique && historique.length > 0) {
        historique.forEach(h => {
            contexte += `Utilisateur: ${h.utilisateur}\nAssistant: ${h.assistant}\n\n`
        })
    }

    // Ajouter le nouveau message
    const promptFinal = contexte
        ? `${contexte}Utilisateur: ${message}\nAssistant:`
        : message

    console.log('📡 Envoi à Ollama avec contexte...')

    try {
        const response = await fetch('http://127.0.0.1:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'llama3.2',
                prompt: promptFinal,
                stream: false
            })
        })

        const data = await response.json()
        console.log('✅ Réponse reçue !')
        res.json({ reponse: data.response })

    } catch (error) {
        console.log('❌ Erreur :', error.message)
        res.status(500).json({ erreur: error.message })
    }
})

app.listen(3000, () => {
    console.log('✅ Serveur démarré sur http://localhost:3000')
})