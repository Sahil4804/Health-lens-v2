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
import HeatmapChart from './Calendar-chart.jsx';
import MyResponsiveAreaBump from './Rank-2.jsx';
import Introduction from './components/Introduction/Intro_main';
import Cards_return from './components/Cards/card_all';
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
      
      <div >
        <Navbar /> 
        <div style={{position:'relative',top:'15vh'}}>
           <Introduction />
         </div>

         <div style={{position:'relative',top:'15vh'}}>
            <Cards_return />
         </div>
        
        <App isloading={isloading} changer={makefalse} />
        {/* <h2 style={{position:'relative',top:'20vh'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore quas ipsam temporibus. A blanditiis quasi nisi magni quidem. Nemo quae commodi autem beatae, itaque excepturi culpa quia in dolorum.</h2> */}
    
      </div>
        {/* <StepCountsGraph /> */}

      <div style={{ position: 'relative',top:'20vh' }}>
        {/* <Cards_return /> */}
        < Heatmap />
      </div>
      <div style={{position:'relative',top:'160vh'}}>
        <HeatmapChart/>
      </div>
    </ThemeProvider>
  );

}

export default Sup;

