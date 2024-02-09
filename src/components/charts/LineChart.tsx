'use client'

// react
import React, { useState, useRef } from 'react'

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

    const [range, setRange] = useState([0, labels.length - 1])
    const [chartRef, setChartRef] = useState<HTMLCanvasElement | null>(null);

    const onClick = (event : React.MouseEvent) => {

        if (!chartRef) return

        const rect = chartRef.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const left = rect.left
        const top = rect.top
        const mouseLeft = event.clientX
        const mouseTop = event.clientY

        if (mouseLeft < left || mouseLeft > left + width || mouseTop < top || mouseTop > top + height) return

        const x = mouseLeft - left
        const percX = x / width
        const leftRange = range[1] * Math.round(percX)
        const rightRange = range[1] - leftRange

        

    }

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
        labels : labels.slice(range[0], range[1]),
        datasets : datasets.map((dataset : TimeChartDataSet, index) => ({
            ...dataset,
            borderColor: `hsl(${index * 360 / datasets.length}, 100%, 50%)`,
            backgroundColor: `hsl(${index * 360 / datasets.length}, 100%, 50%)`,
        }))
    }

    return (
        <Line options={options} data={data} onClick={onClick} ref={(ref) => ref && setChartRef(ref.canvas)}/>
    )
}

export default LineChart