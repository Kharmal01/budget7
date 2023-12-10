import React from 'react';
import RecentMonthsTable from './RecentMonthsTable.js';
import SummaryTable from './SummaryTable.js';

const RightSection = ({ data, dataN1, dataN2, dataN3, currentYear }) => {
  return (
    <div id="droite">
      <SummaryTable data={data} />
      <RecentMonthsTable dataN1={dataN1} dataN2={dataN2} dataN3={dataN3} currentYear={currentYear} />
    </div>
  );
};

export default RightSection;
