import React from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import treemap from 'highcharts/modules/treemap';
import treegraph from 'highcharts/modules/treegraph';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';

treemap(Highcharts);
treegraph(Highcharts);
exporting(Highcharts);
accessibility(Highcharts);
const data = [
    {
        id: '0.0',
        parent: '',
        name: 'Sleep',
        color:'gray'
    },
    {
        id: '1.3',
        parent: '0.0',
        name: 'REM',
        color:'#79dae9'
    },
    {
        id: '1.1',
        parent: '0.0',
        name: 'Deep Sleep',
        color:'#d9c795'
    },
    {
        id: '1.2',
        parent: '0.0',
        name: 'Light',
        color:'#F2613F'
        
    },

   

];


const TreegraphComponent2 = () => {
    const options = {
        title: {
            text: 'Calories',
            style: {
                color: '#F2613F',
                fontSize: '2vw',
                fontWeight: 'bold',
                fontFamily: 'Poppins',
            
            }
        },
        series: [
            {
                type: 'treegraph',
                data,
                tooltip: {
                    pointFormat: '{point.name}',
                },
                marker: {
                    symbol: 'rect',
                    width: '25%',
                },
                borderRadius: 10,
                dataLabels: {
                    pointFormat: '{point.name}',
                    style: {
                        fontFamily: 'Poppins, sans-serif', // Font family for data labels
                        fontSize: '12px', // Font size for data labels
                        color: 'white', // Color for data labels
                        textOutline: 'none',    

                    },
                },
                levels: [
                    {
                        color:'violet',
                        level: 1,
                        levelIsConstant: false,
                    },
                    {
                        level: 2,
                        colorByPoint: true,

                    },
                    {
                        level: 3,
                        colorVariation: {
                            key: 'brightness',
                            to: -0.5,
                        },
                    },
                    {
                        level: 4,
                        colorVariation: {
                        
                            key: 'brightness',
                            to: 0.5,
                        },
                    },
                ],
            },
        ],
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{ style: { maxWidth: '800px', minWidth: '360px', margin: '0 auto', height: '400px' } }}
            />
        </div>
    );
};

export default TreegraphComponent2;