import React, { useEffect, useState } from 'react';

const ButtonsSection = ({ onMonthChange }) => {
  // Initialise l'état avec le mois et l'année actuels
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  console.log(currentMonth + " " + currentYear);

  useEffect(() => {
    onMonthChange(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  // Fonction pour passer au mois suivant
  const handleNextMonth = () => {
    var newMonth = (currentMonth % 12) + 1
    var newYear = currentYear + (currentMonth === 12 ? 1 : 0)
    console.log("Prev:" + currentMonth + " " + currentYear);
    setCurrentMonth(newMonth);
    setCurrentYear(newYear, onMonthChange);
    console.log("New:" + currentMonth + " " + currentYear);
    onMonthChange(currentMonth, currentYear);
  };

  // Fonction pour passer au mois précédent
  const handlePreviousMonth = () => {
    var newMonth = currentMonth === 1 ? 12 : currentMonth - 1
    var newYear = currentYear - (currentMonth === 1 ? 1 : 0);
    console.log("Prev:" + currentMonth + " " + currentYear);
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    console.log("New:" + currentMonth + " " + currentYear);
    onMonthChange(currentMonth, currentYear);
  };

  return (
    <div className="space-between">
      <button className="btn btn-primary" id="precedent" onClick={handlePreviousMonth}>
        ⬅
      </button>
      <h3>{`${getMonthName(currentMonth)} ${currentYear}`}</h3>
      <button className="btn btn-primary btn-add" id="suivant" onClick={handleNextMonth}>
        ➡
      </button>
    </div>
  );
};

// Fonction utilitaire pour obtenir le nom du mois à partir de son numéro
const getMonthName = (monthNumber) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril',
    'Mai', 'Juin', 'Juillet', 'Août',
    'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  return months[monthNumber - 1];
};

export default ButtonsSection;
