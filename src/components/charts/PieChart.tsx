'use client'

// chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import annotationPlugin from 'chartjs-plugin-annotation'

// types
import { DistributionChartData } from '@/types/types'

const PieChart = ({ distributionDataSet, label } : { distributionDataSet : DistributionChartData[], label : string }) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        annotationPlugin,
        ArcElement
    )

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const data = {
            labels: distributionDataSet.map(item => item.label),
            datasets: [{
                label: label,
                data: distributionDataSet.map(item => item.count),
                backgroundColor: distributionDataSet.map(item => item.label).map((item, index) => `hsl(${index * 30}, 100%, 50%)`),
                borderWidth: 0,
                hoverOffset: 4
            }]
        }

    return (
            <Pie data={data} options={options} />
    )
}

export default PieChart