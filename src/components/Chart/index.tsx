import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { CurrencyProps } from '../../types';
import BoxShadow from '../BoxShadow';
import { Title } from '../Typography';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface CurrencyChartProps {
  data: CurrencyProps[];
}

const CurrencyChart: React.FC<CurrencyChartProps> = ({ data }) => {
  const labels = data.map((item) =>
    new Date(item.timestamp! * 1000).toLocaleTimeString()
  );
  const highs = data.map((item) => item.high);
  const lows = data.map((item) => item.low);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'High',
        data: highs,
        borderColor: '#ff7300',
        fill: false,
      },
      {
        label: 'Low',
        data: lows,
        borderColor: '#387908',
        fill: false,
      },
    ],
  };

  return (
    <BoxShadow style={{ margin: '16px' }}>
      <Title style={{ textAlign: 'center', padding: '10px' }}>
        Gráfico de Cotação do {data.length && data[0].name?.split('/')[0]}
      </Title>
      <Line data={chartData} style={{ width: '100%', height: '350px' }} />
    </BoxShadow>
  );
};

export default CurrencyChart;
