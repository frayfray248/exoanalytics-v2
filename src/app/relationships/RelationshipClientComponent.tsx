'use client'
// react
import React, { useEffect, useState } from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import ScatterChart from '@/components/charts/ScatterChart'
import Select from '@/components/shared/Select'
import Container from '@/components/shared/Container'

// utils
import stats from '@/utils/stats'

// types
import { PlanetColumn, ScatterChartDataSet } from '@/types/types'

const RelationshipClientComponent = ({ planetColumns }: { planetColumns: PlanetColumn[] }) => {

    // state
    const [planetData, setPlanetData] = useState<{ [key: string]: number }[]>([])
    const [selectedXAxisColumn, setSelectedXAxisColumn] = useState<string | null>(planetColumns[0].name || null)
    const [selectedYAxisColumn, setSelectedYAxisColumn] = useState<string | null>(planetColumns[1].name || null)
    const [loading, setLoading] = useState<boolean>(false)

    // effects
    useEffect(() => {
        ; (async () => {
            try {

                setLoading(true)

                const res = await fetch(`/api/planets?columns=${selectedXAxisColumn},${selectedYAxisColumn}`)

                const data: { [key: string]: number }[] = await res.json()

                // consider moving this calculation to the server
                const newPlanetData: { [key: string]: number }[] = stats.removeOutliersFromObjectArray(data, 3)

                setPlanetData(newPlanetData)

            } catch (error) {

                if (error instanceof Error) {
                    console.log(error.message)
                }

            }
            finally {

                setLoading(false)

            }
        })()
    }, [selectedXAxisColumn, selectedYAxisColumn])



    const handleXAxisChange = (index: number) => {

        setSelectedXAxisColumn(planetColumns[index].name)

    }

    const handleYAxisChange = (index: number) => {

        setSelectedYAxisColumn(planetColumns[index].name)

    }

    const datasets: ScatterChartDataSet[] = [
        {
            label: "Planets",
            data: planetData.map((planet: any) => {
                return {
                    x: selectedXAxisColumn ? planet[selectedXAxisColumn] : 0,
                    y: selectedYAxisColumn ? planet[selectedYAxisColumn] : 0
                }
            })
        }
    ]

    return (
        <PageLayout>
            <div className="flex flex-col min-h-96 max-w-6xl p-4 mx-auto text-sm lg:text-base">
                <div className="border border-slate-400 m-4 p-2">
                    <h1 className='text-2xl mb-2'>Relationship Chart</h1>
                    <p>The chart below is a scatter chart that shows the relationship of two exoplanet numerical properties. Each dot on the chart represents a planet 
                        and the position of the dot on the chart represents the value of the two properties for that planet. The chart can be used to identify 
                        relationships between the two properties. You can select the properties to display on the chart using the dropdowns below.
                    </p>
                </div>
                <div className="border border-slate-400 m-4 p-2">
                    <Select label="X Axis:" items={planetColumns.map((planetColumn) => planetColumn.description)} onChange={handleXAxisChange} />
                    <Select label="Y Axis:" items={planetColumns.map((planetColumn) => planetColumn.description)} onChange={handleYAxisChange} />
                </div>
                <div className="relative border border-slate-400 m-4 p-2 flex-1 min-h-96">
                    {
                        loading ?
                            <p>Loading...</p>
                            :
                            <ScatterChart xAxisLabel={selectedXAxisColumn || "label"} yAxisLabel={selectedYAxisColumn || "label"} datasets={datasets} />
                    }
                </div>
            </div>

            {/* <div className='border p-2'>
                <Container>
                    <Select items={planetColumns.map((planetColumn) => planetColumn.description)} onChange={handleXAxisChange} />
                    <Select items={planetColumns.map((planetColumn) => planetColumn.description)} onChange={handleYAxisChange} />
                </Container>
            </div>
            {
                loading ?
                    <div className='flex justify-center items-center h-80'>
                        <p>Loading...</p>
                    </div>
                    :
                    <div className='border relative flex justify-center flex-1 min-h-80'>
                        <ScatterChart xAxisLabel={selectedXAxisColumn || "label"} yAxisLabel={selectedYAxisColumn || "label"} datasets={datasets} />
                    </div>
            } */}

        </PageLayout>
    )
}


export default RelationshipClientComponent