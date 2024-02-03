'use client'

// react
import React from 'react'

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
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

// types
import { TimeChartDataSet } from '@/types/types'


const LineChart = ({ title, labels, datasets} : { title : string, labels : string[], datasets : TimeChartDataSet[]}) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: title,
            },
        },
    }

    const data = {
        labels,
        datasets : datasets.map((dataset : TimeChartDataSet, index) => ({
            ...dataset,
            borderColor: `hsl(${index * 360 / datasets.length}, 100%, 50%)`,
            backgroundColor: `hsl(${index * 360 / datasets.length}, 100%, 50%)`,
        }))
    }

    return (
        <Line options={options} data={data} />
    )
}

export default LineChart