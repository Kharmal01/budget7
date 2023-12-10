import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ExpensesSection from './ExpensesSection';
import ButtonsSection from './ButtonsSection.js';
import RightSection from './RightSection.js';

const fetchData = async (year, month) => {
  try {
    // Construit l'URL avec les paramètres année et mois
    const url = `http://localhost:3000/${year}/${month}`;

    // Effectue la requête GET
    const response = await fetch(url);
    // Vérifie si la requête a réussi (statut 200)
    if (response.ok) {
      // Convertit la réponse en JSON
      const data = await response.json();
      return data;
    } else {
      // Si la requête échoue, lance une exception avec le statut
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error.message);
    throw error;
  }
};

const MonthSummary = () => {
  const [data, setData] = useState(null);
  const [dataN1, setDataN1] = useState(null);
  const [dataN2, setDataN2] = useState(null);
  const [dataN3, setDataN3] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleMonthChange = (selectedMonth, selectedYear) => {
    // Met à jour les états du mois et de l'année dans MonthSummary
    console.log("Prev:" + currentMonth + " " + currentYear);
    setCurrentMonth(selectedMonth);
    setCurrentYear(selectedYear);
    console.log("New:" + currentMonth + " " + currentYear);
  };

  const fetchDataForCurrentMonth = async () => {
    try {
      const result = await fetchData(currentYear, currentMonth);
      setData(result);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
    }
  };
  
  const fetchDataYearMinusOne = async () => {
    try {
      const result = await fetchData(currentYear-1, currentMonth);
      setDataN1(result);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
    }
  };

  const fetchDataYearMinusTwo = async () => {
    try {
      const result = await fetchData(currentYear-2, currentMonth);
      setDataN2(result);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
    }
  };

  const fetchDataYearMinusThree = async () => {
    try {
      const result = await fetchData(currentYear-3, currentMonth);
      setDataN3(result);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
    }
  };

  useEffect(() => {
    fetchDataForCurrentMonth();
    fetchDataYearMinusOne();
    fetchDataYearMinusTwo();
    fetchDataYearMinusThree();
  }, [currentMonth, currentYear]);

  const handleAddExpenses = async (newExpenses) => {
    try {
      const response = await fetch('http://localhost:3000/addExpenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpenses),
      });

      if (response.ok) {
        // Rafraîchit les données après l'ajout de dépenses
        await fetchDataForCurrentMonth();
        alert('Dépenses ajoutées avec succès');
      } else {
        alert('Erreur lors de l\'ajout des dépenses');
      }
    } catch (error) {
      console.error('Erreur lors de la requête pour ajouter des dépenses:', error.message);
      alert('Erreur lors de la requête pour ajouter des dépenses');
    }
  };

  return (
    <div className="vertical-align">
      <ButtonsSection onMonthChange={handleMonthChange}/>
      <div className="horizontal-align">
        <ExpensesSection data={data} onAddExpenses={handleAddExpenses} currentYear={currentYear} currentMonth={currentMonth} />
        <RightSection data={data} dataN1={dataN1} dataN2={dataN2} dataN3={dataN3} currentYear={currentYear} />
      </div>
    </div>
  );
};

  function App() {
    return (
      MonthSummary()
    );
  }

  export default App;
