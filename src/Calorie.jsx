import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsAccessibility from 'highcharts/modules/accessibility';

highchartsExporting(Highcharts);
highchartsExportData(Highcharts);
highchartsAccessibility(Highcharts);

(function (H) {
    H.seriesTypes.pie.prototype.animate = function (init) {
        const series = this,
            chart = series.chart,
            points = series.points,
            { animation } = series.options,
            { startAngleRad } = series;

        function fanAnimate(point, startAngleRad) {
            const graphic = point.graphic,
                args = point.shapeArgs;

            if (graphic && args) {
                graphic
                    .attr({
                        start: startAngleRad,
                        end: startAngleRad,
                        opacity: 1
                    })
                    .animate(
                        {
                            start: args.start,
                            end: args.end
                        },
                        {
                            duration: animation.duration / points.length
                        },
                        function () {
                            if (points[point.index + 1]) {
                                fanAnimate(points[point.index + 1], args.end);
                            }
                            if (point.index === series.points.length - 1) {
                                series.dataLabelsGroup.animate(
                                    {
                                        opacity: 1
                                    },
                                    void 0,
                                    function () {
                                        points.forEach(point => {
                                            point.opacity = 1;
                                        });
                                        series.update(
                                            {
                                                enableMouseTracking: true
                                            },
                                            false
                                        );
                                        chart.update({
                                            plotOptions: {
                                                pie: {
                                                    innerSize: '40%',
                                                    borderRadius: 8
                                                }
                                            }
                                        });
                                    }
                                );
                            }
                        }
                    );
            }
        }

        if (init) {
            points.forEach(point => {
                point.opacity = 0;
            });
        } else {
            fanAnimate(points[0], startAngleRad);
        }
    };
})(Highcharts);

let options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Departamental Strength of the Company',
        align: 'left'
    },
    subtitle: {
        text: 'Custom animation of pie series',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            borderWidth: 2,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage}%',
                distance: 20
            }
        }
    },
    series: [
        {
            enableMouseTracking: false,
            animation: {
                duration: 2000
            },
            colorByPoint: true,
            data: [
                {
                    name: 'Carbohydrates',
                    y: 21.3
                },
                {
                    name: 'Protein',
                    y: 18.7
                },
                {
                    name: 'Fats',
                    y: 20.2
                },
                {
                    name: 'Alcohol',
                    y: 14.2
                },
                {
                    name: '',
                    y: 25.6
                }
            ]
        }
    ]
};
function generateRandomNumbers() {
    let numbers = [];
    let sum = 0;

    // Generate four random numbers
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.random();
        if (sum != 0)
            randomNumber /= (sum);
        numbers.push(randomNumber);
        sum += randomNumber;
    }

    // Calculate the fifth number to make the sum equal to 1
    numbers.push(1 - sum);

    return numbers;
}

const PieChart = (props) => {

    const [goalhave, setGoalhave] = React.useState(props.goal);
    useEffect(() => {
        Highcharts.setOptions({
            colors: ['#FFD700', '#C0C0C0', '#CD7F32', '#009ACD', '#ffffff']
        });
        console.log(props.achieved, props.goal);
        setGoalhave(props.goal);
        const li1 = [0.4,0.3,0.15,0.15];
        let tot_sum=0;
        options.series[0].data[0].y = (props.achieved * li1[0] * 8);
        tot_sum += options.series[0].data[0].y;
        options.series[0].data[1].y = (props.achieved * li1[1] * 8);
        tot_sum += options.series[0].data[1].y;
        options.series[0].data[2].y = (props.achieved * li1[2] * 8);
        tot_sum += options.series[0].data[2].y;
        options.series[0].data[3].y = (props.goal * li1[3] * 8);
        tot_sum += options.series[0].data[3].y;
        options.series[0].data[4].y = props.goal-props.achieved;   
    }, [props.achieved, props.goal]);
    
    return (
        <div>
            {props.achieved} -- {props.goal}
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default PieChart;