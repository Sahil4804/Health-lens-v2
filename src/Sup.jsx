import React from 'react';
import App from './App';
import StepCountsGraph from './components/LinePLot/LineGraph';
import { ThemeProvider } from "./contexts/ProvideContext";
import { useState, useEffect } from 'react';
import Togglebutton from './utils/Togglebutton';
import Navbar from './components/Navbar/Navbar';
import TauArcComponent from './calorietracker.jsx';
import Sidebar from './Sidebar.jsx';
import Heatmap from './Heatmap.jsx';
import PolarChart from './components/Sleeptrack.jsx';
function Sup({ option }) {
  const [themeMode, setThemeMode] = useState('light');
  const [isloading, setIsloading] = useState(true);
  function makefalse() {
    console.log("makefalse")
    setIsloading(false)
  }
  const darkTheme = () => {
    setThemeMode('dark');
  }
  const lightTheme = () => {
    setThemeMode('light');
  }
  useEffect(() => { }, [themeMode, isloading]);
  

  

  return (

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <Sidebar />
      <div >
        <Navbar />
        <App isloading={isloading} changer={makefalse} />
        <StepCountsGraph />
      </div>
      <TauArcComponent width={100} />
      <Heatmap/>


    </ThemeProvider>
  );

}

export default Sup;

