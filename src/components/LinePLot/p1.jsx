import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import yourselfgenerate from './yourself_data.js';
// import { data11, data12 } from './p1_data.js';


// Import Highcharts modules
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsMore from 'highcharts/highcharts-more';

// Initialize Highcharts modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);

const data1 = [];

for (let hour = 0; hour < 24; hour++) {
  const hourString = hour.toString().padStart(2, '0') + ':00';
  data1.push(yourselfgenerate[hourString]['Yourself']);
}

const Linechart = (props) => {
  const chartRef = useRef(null);
  console.log(props.date_used);
  useEffect(() => {
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartRef.current) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  const config = {
    chart: {
      type: 'line'
    },
    title: {
      text: undefined
    },
    xAxis: {
      labels: {
        style: {
          fontSize: '20px' // Adjust the font size as needed
        }
      },
      categories: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
        '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
        '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
      ]
    },
    yAxis: {
      min: 0.00,
      max: 21000.00,
      tickAmount: 10,
      title: {
        text: undefined,
      },
      labels: {
        style: {
          fontSize: '20px' // Adjust the font size as needed
        }
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'daily',  
      data: data1
    }, {
      name: 'average',
      data: [121, 160, 200, 218, 219, 220, 220, 245, 479, 1743, 2577, 3206, 3893, 4737, 5718, 6296, 6875, 7494, 8446, 9678, 10828, 11525, 12093, 13145]
    }]
  };



  return (
    // <HighchartsReact highcharts={Highcharts} options={config} ref={chartRef} />
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', /* Optional: makes the container full height of the viewport */
    }}>
      <div style={{
        border: '1px solid #ccc',
        width: '600px',
        padding: '40px',
        borderRadius: '5px',
      }}>
        <HighchartsReact highcharts={Highcharts} options={config} ref={chartRef} />
      </div>
    </div>
  );
};

export default Linechart;
