// react
import React, { useState } from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import LineChart from '@/components/charts/LineChart'

// api
import api from '@/api/api'

// types
import { PlanetsDiscoveredYear, TimeChartDataSet } from '@/types/types'

const Page = async () => {

    const planetsDiscoveredYears: PlanetsDiscoveredYear[] = await api.getPlanetCountByYear()


    const labels = planetsDiscoveredYears.map((planetsDiscoveredYear: PlanetsDiscoveredYear) => planetsDiscoveredYear.year.toString())
    const datasets: TimeChartDataSet[] = [
        {
            label: "Planets Discovered",
            data: planetsDiscoveredYears.map((planetsDiscoveredYear: PlanetsDiscoveredYear) => planetsDiscoveredYear.count)
        },
        {
            label: "Cumulative planets discovered",
            data: planetsDiscoveredYears.map((planetsDiscoveredYear: PlanetsDiscoveredYear) => planetsDiscoveredYear.count)
                .reduce((acc: number[], curr: number, index: number) => [...acc, curr + (acc[index - 1] || 0)], [])
        }
    ]

    return (
        <PageLayout>
                <div className='border relative flex justify-center flex-1 min-h-80'>
                    <LineChart title="foobar" labels={labels} datasets={datasets} />
                </div>
        </PageLayout>
    )
}

export default Page