import React, { useState } from 'react';

const ExpensesSection = ({ data, onAddExpenses, currentYear, currentMonth }) => {
  const [amount, setAmount] = useState('');
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpenses = () => {
    if (amount && label && category) {
      // Appelle la fonction fournie par le parent (onAddExpenses) avec les données
      onAddExpenses({ montant: amount, libelle: label, categorie: category, annee:currentYear, mois:currentMonth });
      
      // Réinitialise les champs après l'ajout
      setAmount('');
      setLabel('');
      setCategory('');
    } else {
      // Affiche un message d'erreur si des informations sont manquantes
      alert('Veuillez fournir toutes les informations nécessaires.');
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl" id="gauche">
      <div className="card-body">
        <h2 className="card-title">Dépenses</h2>
        <table>
          <thead>
            <tr>
              <th>Montant</th>
              <th>Libellé</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.montant}</td>
                  <td>{expense.libelle}</td>
                  <td>{expense.categorie}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">
                  {data ? (
                    'Aucune dépense disponible'
                  ) : (
                    'Chargement en cours...'
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="card-actions justify-end">
          {/* Ajout des champs de formulaire pour l'ajout de dépenses */}
          <input
            type="text"
            placeholder="Montant"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Libellé"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <input
            type="text"
            placeholder="Catégorie"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className="btn btn-primary" id="ajout" onClick={handleAddExpenses}>
            Ajouter Dépenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSection;
