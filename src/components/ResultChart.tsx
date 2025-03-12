import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS , CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { colors } from '../resources/colorsMap'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type ResultChartProps = {
  traitScores: Record<string, number>
}

const ResultChart: React.FC<ResultChartProps> = ({ traitScores }) => {
  const labels = Object.keys(traitScores)
  const dataValues = Object.values(traitScores)
  const backgroundColors = labels.map((trait) => colors[trait] || "#FF6B6B") 

  if(labels.length === 0) return null

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Personality Traits',
        data: dataValues,
        backgroundColor: backgroundColors,
      }
    ]
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { ticks: { autoSkip: false}},
    }
  }

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default ResultChart
