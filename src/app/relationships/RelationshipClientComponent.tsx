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

    // effects
    useEffect(() => {
        ; (async () => {
            try {

                const res = await fetch(`/api/planets?columns=${selectedXAxisColumn},${selectedYAxisColumn}`)

                const data : {[key: string]: number }[] = await res.json()
    
                const newPlanetData : {[key: string]: number }[] = stats.removeOutliersFromObjectArray(data, 3)
    
                setPlanetData(newPlanetData)

            } catch(error) {

                if (error instanceof Error) {
                    console.log(error.message)
                }

            }
        })()
    }, [selectedXAxisColumn, selectedYAxisColumn])



    const handleXAxisChange = (index : number) => {

        setSelectedXAxisColumn(planetColumns[index].name)

    }

    const handleYAxisChange = (index : number) => {

        setSelectedYAxisColumn(planetColumns[index].name)

    }

    const datasets : ScatterChartDataSet[] = [
        {
            label: "Planets",
            data: planetData.map((planet : any) => {
                return {
                    x: selectedXAxisColumn ? planet[selectedXAxisColumn] : 0,
                    y: selectedYAxisColumn ? planet[selectedYAxisColumn] : 0
                }
            })
        }
    ]

    return (
        <PageLayout>
                <div className='border p-2'>
                    <Container>
                        <Select items={planetColumns.map((planetColumn) => planetColumn.description)} onChange={handleXAxisChange} />
                        <Select items={planetColumns.map((planetColumn) => planetColumn.description)} onChange={handleYAxisChange} />
                    </Container>
                </div>
                <div className='border relative flex justify-center flex-1 min-w-80 min-h-80'>
                    <ScatterChart xAxisLabel={selectedXAxisColumn || "label"} yAxisLabel={selectedYAxisColumn || "label"} datasets={datasets} />
                </div>
        </PageLayout>
    )
}


export default RelationshipClientComponent