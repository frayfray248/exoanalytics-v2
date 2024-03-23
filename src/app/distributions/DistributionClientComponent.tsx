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

const DistributionsClientComponent = ({ items, datasets }: { items: string[], datasets: DistributionChartData[][] }) => {

    // state
    const [selectedItem, setSelectedItem] = useState<number>(0)
    const [selectedChart, setSelectedChart] = useState<number>(0)

    // charts
    const chartComponents = [
        <PieChart key={0} distributionDataSet={datasets[selectedItem]} label={items[selectedItem]} />,
        <DoughnutChart key={1} distributionDataSet={datasets[selectedItem]} label={items[selectedItem]} />,
        <BarChart key={2} distributionDataSet={datasets[selectedItem]} label={items[selectedItem]} />
    ]

    const chartNames = [
        "Pie",
        "Doughnut",
        "Bar"
    ]

    return (
        <PageLayout>
                <div className='border'>
                    <Container>
                        <Select items={items} onChange={index => setSelectedItem(index)} />
                        <Select items={chartNames} onChange={index => setSelectedChart(index)} />
                    </Container>
                </div>
                <div className='border relative flex justify-center flex-1 min-h-80'>
                    {chartComponents[selectedChart]}
                </div>
        </PageLayout>
    )
}

export default DistributionsClientComponent