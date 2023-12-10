const express = require('express');
const path = require('path');
const prisma = require('./prisma.js');
const { isNumberObject } = require('util/types');
const { Console } = require('console');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("Server listening on port 3000")
})

app.use(express.static(__dirname + '/../front/build'));


app.get('/:annee/:mois', async (req, res) => {
  const { annee, mois } = req.params;
  if (isNaN(parseInt(annee)) || isNaN(parseInt(mois))){
    res.sendStatus(404);
  } else {
    try {
      // Appelle la fonction getByYearAndMonth avec les paramètres de l'URL
      const result = await prisma.getByYearAndMonth(annee, mois);
      res.send(result);
    } catch (error) {
      // Gère les erreurs éventuelles
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  }
});

app.post('/addExpenses', async (req, res) => {
  try {
    // Récupère les données du corps de la requête
    const { montant, libelle, categorie, annee, mois } = req.body;

    // Appelle la fonction asynchrone pour ajouter les dépenses dans la base de données
    const result = await prisma.addExpenses(parseInt(montant), libelle, categorie, parseInt(annee), parseInt(mois));

    // Envoie la réponse au client
    res.json(result);
  } catch (error) {
    console.error('Erreur lors de l\'ajout des dépenses:', error.message);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'ajout des dépenses' });
  }
});
