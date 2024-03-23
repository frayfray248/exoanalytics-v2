// utils
import QueryBuilder, { SelectColumn, Archive } from "@/utils/QueryBuilder"
import { 
    buildPlanetAggregateQuery,
    buildPlanetCountByYearQuery,
    buildPlanetNamesQuery,
    buildPlanetDataQuery,
    buildPlanetAggregateGroupsQuery
 } from "@/utils/queries"
import { chunkArray } from "@/utils/helpers"

// types
import {
    PlanetsDiscoveredYear,
    PlanetColumn,
    DistributionChartData,
    PlanetAggregate
} from "@/types/types"

const { Table, Column, ADQL } = Archive
const { PS, Schema } = Column
const { Numeric, DataType } = ADQL

const archiveFetch = async (query: string, format: 'json', revalidate?: number) => {

    console.log(`Fetching planet data with query: ${query}`)

    const res = await fetch(`${process.env.EXOPLANET_ARCHIVE_URL}?query=${query}&format=${format}`, revalidate ? { next: { revalidate } } : {})

    if (!res.ok) {
        throw new Error(`Error fetching data from exoplanet archive\n${res.status} ${res.statusText}`)
    }

    return await res.json()

}

export const getPlanetCountByYear = async () => {
    'use server'

    const query = buildPlanetCountByYearQuery()

    const planetsDiscoveredYears: PlanetsDiscoveredYear[] = await archiveFetch(query, "json", 86400)

    return planetsDiscoveredYears

}

export const getColumnDescriptions = async () => {

    const query = new QueryBuilder()
        .select([
            { name: Schema.COLUMN_NAME, as: "name" },
            { name: Schema.DESCRIPTION },
        ])
        .from(Table.SCHEMA)
        .where()
        .columnLike(Schema.TABLE_NAME, Table.PS)
        .format()

        const columnDescriptions: { name: string, description: string }[] = await archiveFetch(query, "json", 86400)

        return columnDescriptions

}

export const getPlanetNumberColumnNames = async () => {

    const query = new QueryBuilder()
        .select([
            { name: Schema.COLUMN_NAME, as: "name" },
            { name: Schema.DESCRIPTION },
        ])
        .from(Table.SCHEMA)
        .where()
        .columnLike(Schema.TABLE_NAME, Table.PS)
        .and()
        .valuesIn(Schema.DATATYPE, [DataType.INT, DataType.DOUBLE])
        .format()

    const planetColumns: PlanetColumn[] = await archiveFetch(query, "json", 86400)

    return planetColumns

}

export const getPlanetData = async (columns: string[], includeNulls : boolean, planetName? : string) => {

    const query = buildPlanetDataQuery(columns, includeNulls, planetName)

    const planetData = await archiveFetch(query, "json")

    return planetData
}

export const getPlanetAggregateData = async (columns : string[], func : Archive.ADQL.Numeric.Function) => {

    const chunks = chunkArray(columns, 50)
    let planetAggregates: PlanetAggregate[] = []

    for (const chunk of chunks) {

        const query = buildPlanetAggregateQuery(chunk, func)

        const data = await archiveFetch(query, "json", 86400)

        planetAggregates = planetAggregates.concat(Object.keys(data[0]).map((key, index) => ({
            value: data[0][key]
        })))

    }

    return planetAggregates

}

export const getPlanetAggregateDataGroups = async (column: string, orderBy : string = 'count') => {

    const query = buildPlanetAggregateGroupsQuery(column, orderBy)

    const data: DistributionChartData[] = await archiveFetch(query, "json", 86400)

    return data

}

export const getPlanetNames = async () => {

    const query = buildPlanetNamesQuery()

    const data : { pl_name : string }[] = await archiveFetch(query, "json", 86400)

    const names = data.map(row => row.pl_name).sort((a, b) => a.localeCompare(b))

    return names

}

const api = {
    getPlanetCountByYear,
    getPlanetNumberColumnNames,
    getPlanetData,
    getPlanetAggregateData,
    getPlanetAggregateDataGroups,
    getPlanetNames,
    getColumnDescriptions
}


export default api