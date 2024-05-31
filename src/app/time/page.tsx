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
            <div className="flex xl:flex-row flex-col min-h-96 max-w-6xl p-4 mx-auto">
                <div className="border border-slate-400 m-4 p-2 xl:max-w-96">
                    <h1 className='text-2xl mb-2'>Time Chart</h1>
                    <p>This chart shows data about the number of exoplanets discovered over time. It displays the amount of planets discovered in a given year and the number of cumulative planets descovered</p>
                </div>
                <div className="relative border border-slate-400 m-4 p-2 flex-1 xl:w-192 min-h-96">
                    <LineChart title="Exoplanet Discoveries Over Time" labels={labels} datasets={datasets} />
                </div>
            </div>
        </PageLayout>
    )
}

export default Page