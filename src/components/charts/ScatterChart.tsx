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

import { Scatter } from 'react-chartjs-2'
import annotationPlugin from 'chartjs-plugin-annotation'

// types
import { ScatterChartDataSet } from '@/types/types'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin
)

const ScatterChart = ({ xAxisLabel, yAxisLabel, datasets } : { xAxisLabel : string, yAxisLabel : string, datasets : ScatterChartDataSet[] }) => {


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                title: {
                    text: yAxisLabel,
                    display: true
                },
                beginAtZero: true
            },
            x: {
                title: {
                    text: xAxisLabel,
                    display: true
                },
                beginAtZero: true
            }
        }
    }

    const data = {
        datasets: datasets
    }
    
    return (
        <Scatter data={data} options={options} />
    )
}

export default ScatterChart