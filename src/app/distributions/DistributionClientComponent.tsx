'use client'

// react
import React, { useState } from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import PieChart from '@/components/charts/PieChart'
import DoughnutChart from '@/components/charts/DoughnutChart'
import Container from '@/components/shared/Container'

// types
import { DistributionChartData } from '@/types/types'
import Select from '@/components/shared/Select'
import BarChart from '@/components/charts/BarChart'

const DistributionsClientComponent = ({ columns, datasets }: { columns: { name: string, description: string }[], datasets: DistributionChartData[][] }) => {

    // state
    const [selectedItem, setSelectedItem] = useState<number>(0)
    const [selectedChart, setSelectedChart] = useState<number>(0)

    // charts
    const chartComponents = [
        <PieChart key={0} distributionDataSet={datasets[selectedItem]} label={columns[selectedItem].description} />,
        <DoughnutChart key={1} distributionDataSet={datasets[selectedItem]} label={columns[selectedItem].description} />,
        <BarChart key={2} distributionDataSet={datasets[selectedItem]} label={columns[selectedItem].description} />
    ]

    const chartNames = [
        "Pie",
        "Doughnut",
        "Bar"
    ]

    return (
        <PageLayout>
            <div className="flex flex-col min-h-96 max-w-6xl p-4 mx-auto text-sm lg:text-base">
                <div className="border border-slate-400 m-4 p-2">
                    <h1 className='text-2xl mb-2'>Distribution Chart</h1>
                    <p>The chart below shows the distribution of exoplanets based on a one numerical property. You may change property and chart type using the dropdowns below.
                    </p>
                </div>
                <div className="border border-slate-400 m-4 p-2">
                    <Select label="Data:" items={columns.map(column => column.description)} onChange={index => setSelectedItem(index)} />
                    <Select label="Chart:" items={chartNames} onChange={index => setSelectedChart(index)} />
                </div>

                <div className="relative border border-slate-400 m-4 p-2 flex-1 min-h-96">
                    {chartComponents[selectedChart]}
                </div>
            </div>
        </PageLayout>
    )
}

export default DistributionsClientComponent