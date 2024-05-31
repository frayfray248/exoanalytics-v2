// react
import React from 'react'

// components
import PageLayout from '@/components/shared/PageLayout'
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@/components/shared/Table'

// api
import { getPlanetAggregateData, getPlanetNumberColumnNames } from '@/api/api'

// types
import { PlanetAggregate, PlanetColumn } from '@/types/types'
import { Archive } from '@/utils/QueryBuilder'

const page = async () => {

    const planetColumns = await getPlanetNumberColumnNames()
    const planetColumnNames = planetColumns.map(column => column.name)

    const averages: PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.AVG)
    const maxes: PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.MAX)
    const mins: PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.MIN)
    const sums: PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.SUM)
    const stdevs: PlanetAggregate[] = await getPlanetAggregateData(planetColumnNames, Archive.ADQL.Numeric.Function.STDDEV)

    const data = planetColumns.map((column, index) => ({
        label: column.description,
        average: averages[index].value,
        max: maxes[index].value,
        min: mins[index].value,
        sum: sums[index].value,
        stdev: stdevs[index].value
    }))


    return (
        <PageLayout>

            <div className="flex flex-col min-h-96 max-w-6xl p-4 mx-auto text-sm lg:text-base">
                <div className="border border-slate-400 m-4 p-2">
                    <h1 className="text-xl font-bold">Aggregate Data</h1>
                    <p className="text-sm">This page displays aggregate data of the numerical properties of exoplanets</p>
                </div>
                <div className="relative border border-slate-400 m-4 first-line:flex-1 max-h-96 overflow-auto">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Column</TableHeaderCell>
                                <TableHeaderCell>Average</TableHeaderCell>
                                <TableHeaderCell>Max</TableHeaderCell>
                                <TableHeaderCell>Min</TableHeaderCell>
                                <TableHeaderCell>Sum</TableHeaderCell>
                                <TableHeaderCell>Standard Deviation</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index} className={index % 2 === 0? "bg-slate-200" : ""}>
                                    <TableCell>{item.label}</TableCell>
                                    <TableCell>{item.average}</TableCell>
                                    <TableCell>{item.max}</TableCell>
                                    <TableCell>{item.min}</TableCell>
                                    <TableCell>{item.sum}</TableCell>
                                    <TableCell>{item.stdev}</TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* <div className="w-full h-full flex flex-row">
                <div>
                    <Table className='border'>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Column</TableHeaderCell>
                                <TableHeaderCell>Average</TableHeaderCell>
                                <TableHeaderCell>Max</TableHeaderCell>
                                <TableHeaderCell>Min</TableHeaderCell>
                                <TableHeaderCell>Sum</TableHeaderCell>
                                <TableHeaderCell>Standard Deviation</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.label}</TableCell>
                                    <TableCell>{item.average}</TableCell>
                                    <TableCell>{item.max}</TableCell>
                                    <TableCell>{item.min}</TableCell>
                                    <TableCell>{item.sum}</TableCell>
                                    <TableCell>{item.stdev}</TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div> */}
        </PageLayout>
    )
}

export default page