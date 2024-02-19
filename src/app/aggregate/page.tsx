// react
import React from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'

// api
import { getPlanetAggregateData, getPlanetNumberColumnNames } from '@/api/api'

// types
import { PlanetAggregate, PlanetColumn } from '@/types/types'
import { Archive } from '@/utils/QueryBuilder'

const page = async () => {

    const planetColumns = await getPlanetNumberColumnNames()
    const planetColumnNames = planetColumns.map(column => column.name)
    
    const averages : PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.AVG)
    const maxes : PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.MAX)
    const mins : PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.MIN)
    const sums : PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.SUM)
    const stdevs : PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.STDDEV)

    const data = planetColumns.map((column, index) => ({ 
        label : column.description,
        average : averages[index].value,
        max : maxes[index].value,
        min : mins[index].value,
        sum : sums[index].value,
        stdev : stdevs[index].value
    }))


    return (
        <PageLayout>
            <div className=' w-full h-full flex flex-row overflow-auto'>
                <div>
                    <table className='text-left'>
                        <thead>
                            <tr>
                                <th>Column</th>
                                <th>Average</th>
                                <th>Max</th>
                                <th>Min</th>
                                <th>Sum</th>
                                <th>Standard Deviation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.label}</td>
                                    <td>{item.average}</td>
                                    <td>{item.max}</td>
                                    <td>{item.min}</td>
                                    <td>{item.sum}</td>
                                    <td>{item.stdev}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </PageLayout>
    )
}

export default page