import React, { useEffect, useRef } from 'react';
import Linechart from './p1';
import Race2 from './p2';
const StepCountsGraph = (props) => {
    let date_r=props.date_sent;
  return (
    <div className="line-graph-container">
      <h3 className="header">Step Counts</h3>
      <Linechart date_used={date_r} />
      <Race2 date_used={date_r}/>
    </div>
  );
};

export default StepCountsGraph;
