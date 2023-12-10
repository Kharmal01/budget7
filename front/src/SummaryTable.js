import React, { useState, useEffect } from 'react';

const SummaryTable = ({ data }) => {
  const [depenses, setDepenses] = useState(0);
  const [revenu, setRevenu] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      // Filtrer les montants positifs (revenus) et négatifs (dépenses)
      const depensesData = data.filter((item) => item.montant < 0);
      const revenuData = data.filter((item) => item.montant > 0);

      // Calculer la somme des montants pour chaque catégorie
      const calculateTotal = (items) => items.reduce((total, item) => total + item.montant, 0);

      const depensesTotal = calculateTotal(depensesData);
      const revenuTotal = calculateTotal(revenuData);

      // Mettre à jour les états avec les totaux calculés
      setDepenses(depensesTotal);
      setRevenu(revenuTotal);
    } else {
      // Si le tableau est vide ou null, réinitialise les totaux
      setDepenses(0);
      setRevenu(0);
    }
  }, [data]);

  const resultat = revenu + depenses;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Dépenses</th>
              <th id="depenses">{depenses}</th>
            </tr>
            <tr>
              <th>Revenu</th>
              <th id="revenu">{revenu}</th>
            </tr>
            <tr>
              <th>Résultat</th>
              <th id="résultat">{resultat}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;