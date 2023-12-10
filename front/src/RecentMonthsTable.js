import React, { useState, useEffect } from 'react';

const calculateTotals = (data) => {
  if (data && data.length > 0) {
    const depensesData = data.filter((item) => item.montant < 0);
    const revenuData = data.filter((item) => item.montant > 0);

    const calculateTotal = (items) => items.reduce((total, item) => total + item.montant, 0);

    const depensesTotal = calculateTotal(depensesData);
    const revenuTotal = calculateTotal(revenuData);

    return { depensesTotal, revenuTotal };
  } else {
    return { depensesTotal: 0, revenuTotal: 0 };
  }
};


const RecentMonthsTable = ({dataN1, dataN2, dataN3, currentYear}) => {
  
  const [depenses1, setDepenses1] = useState(0);
  const [revenu1, setRevenus1] = useState(0);
  const [depenses2, setDepenses2] = useState(0);
  const [revenu2, setRevenus2] = useState(0);
  const [depenses3, setDepenses3] = useState(0);
  const [revenu3, setRevenus3] = useState(0);


  useEffect(() => {
    const { depensesTotal, revenuTotal } = calculateTotals(dataN1);
    setDepenses1(depensesTotal);
    setRevenus1(revenuTotal);
  }, [dataN1]);

  useEffect(() => {
    const { depensesTotal, revenuTotal } = calculateTotals(dataN2);
    setDepenses2(depensesTotal);
    setRevenus2(revenuTotal);
  }, [dataN2]);

  useEffect(() => {
    const { depensesTotal, revenuTotal } = calculateTotals(dataN3);
    setDepenses3(depensesTotal);
    setRevenus3(revenuTotal);
  }, [dataN3]);

  const resultat1 = revenu1 + depenses1;
  const resultat2 = revenu2 + depenses2;
  const resultat3 = revenu3 + depenses3;
  return (
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Mois des dernières années</h2>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>{currentYear-3}</td>
            <td>{currentYear-2}</td>
            <td>{currentYear-1}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dépenses</td>
            <td>{depenses3}</td>
            <td>{depenses2}</td>
            <td>{depenses1}</td>
          </tr>
          <tr>
            <td>Revenus</td>
            <td>{revenu3}</td>
            <td>{revenu2}</td>
            <td>{revenu1}</td>
          </tr>
          <tr>
            <td>Resultat</td>
            <td>{resultat3}</td>
            <td>{resultat2}</td>
            <td>{resultat1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)};

export default RecentMonthsTable;
