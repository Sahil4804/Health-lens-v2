import React from 'react';
import Highcharts from 'highcharts';
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
        name: 'Calories'
    },
    {
        id: '1.3',
        parent: '0.0',
        name: 'Carbohydrates'
    },
    {
        id: '1.1',
        parent: '0.0',
        name: 'Protein'
    },
    {
        id: '1.2',
        parent: '0.0',
        name: 'Alcohol'
    },
    {
        id: '1.4',
        parent: '0.0',
        name: 'Fats'
    },
   

];


const TreegraphComponent = () => {
    const options = {
        title: {
            text: 'Calories',
            style: {
                color: 'blackd',
                fontSize: '24px',

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
                        fontFamily: 'Verdana, sans-serif', // Font family for data labels
                        fontSize: '12px', // Font size for data labels
                        color: 'white', // Color for data labels
                        textOutline: 'none',    

                    },
                },
                levels: [
                    {
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
                containerProps={{ style: { maxWidth: '800px', minWidth: '360px', margin: '0 auto', height: '600px' } }}
            />
        </div>
    );
};

export default TreegraphComponent;