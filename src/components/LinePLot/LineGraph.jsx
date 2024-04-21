import React, { useEffect, useRef } from 'react';
import Linechart from './p1';
import Race2 from './p2';
const StepCountsGraph = () => {
 
  return (
    <div className='line-graph-container'>
      <h3 className='header'>Step Counts</h3>
        <Linechart />
        <Race2 />
    </div>

  );
};

export default StepCountsGraph;
