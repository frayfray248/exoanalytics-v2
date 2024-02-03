// react
import React from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import LineChart from '@/components/LineChart'

// api
import api from '@/api/api'

// types
import { PlanetsDiscoveredYear, TimeChartDataSet } from '@/types/types'

const Page = async () => {

    const planetsDiscoveredYears : PlanetsDiscoveredYear[] = await api.getPlanetCountByYear()

    const labels = planetsDiscoveredYears.map((planetsDiscoveredYear : PlanetsDiscoveredYear) => planetsDiscoveredYear.year.toString())
    const datasets : TimeChartDataSet[] = [
        {
            label : "Planets Discovered",
            data : planetsDiscoveredYears.map((planetsDiscoveredYear : PlanetsDiscoveredYear) => planetsDiscoveredYear.count)
        },
        {
            label : "Cumulative planets discovered",
            data : planetsDiscoveredYears.map((planetsDiscoveredYear : PlanetsDiscoveredYear) => planetsDiscoveredYear.count)
            .reduce((acc : number[], curr : number, index : number) => [...acc, curr + (acc[index - 1] || 0)], [])
        }
    ]

    return (
        <PageLayout>
            <div className='w-full h-full flex flex-row'>
                <div className='border flex-1'></div>
                <div className='border relative md:w-144 lg:w-160 xl:w-208 2xl:w-288'>
                    <LineChart title="foobar" labels={labels} datasets={datasets} />
                    </div>
                <div className='border flex-1'></div>
            </div>
        </PageLayout>
    )
}

export default Page