import queries from "@/const/queries"

import { PlanetsDiscoveredYear, PlanetColumn, DistributionChartData } from "@/types/types"

const archiveFetch = async (query: string, format: string, revalidate?: number) => {

    const res = await fetch(`${process.env.EXOPLANET_ARCHIVE_URL}?query=${query}&format=${format}`, revalidate ? { next: { revalidate } } : {})

    if (!res.ok) {
        throw new Error(`Error fetching data from exoplanet archive\n${res.status} ${res.statusText}`)
    }

    return await res.json()

}

export const getPlanetCountByYear = async () => {
    'use server'

    const data = await archiveFetch(queries.PLANET_COUNT_BY_YEAR, "json", 86400)

    const planetsDiscoveredYears: PlanetsDiscoveredYear[] = data.map(
        (item: { disc_year: number, planet_count: number }) =>
            ({ year: item.disc_year, count: item.planet_count }))

    return planetsDiscoveredYears

}

export const getPlanetColumnNames = async () => {

    const data = await archiveFetch(queries.PLANET_COLUMN_NAMES, "json", 86400)

    return JSON.stringify(data)

}

export const getPlanetNumberColumnNames = async () => {

    const data = await archiveFetch(queries.PLANET_NUMBER_COLUMN_NAMES, "json", 86400)

    const planetColumns: PlanetColumn[] = data.map(
        (item: { column_name: string, description: string }) =>
            ({ name: item.column_name, description: item.description })
    )

    return planetColumns

}

export const getPlanetData = async (columns: string[]) => {

    const whereClause = columns.map((column) => `${column}+IS+NOT+NULL`).join("+AND+")

    const query = `${queries.PLANET_DATA.replace("*", columns.join(","))}+WHERE+${whereClause}`

    console.log(`Fetching planet data with query: ${query}`)

    const data = await archiveFetch(query, "json")

    return data
}

export const getPlanetAggregateRows = async (column: string) => {

    const query = queries.PLANET_AGGREGATE_ROWS_TEMPLATE.replace(/column_name/g, column)

    console.log(`Fetching planet aggregate rows with query: ${query}`)

    const data : DistributionChartData[]  = await archiveFetch(query, "json", 86400)

    return data

}

const api = {
    getPlanetCountByYear,
    getPlanetColumnNames,
    getPlanetNumberColumnNames,
    getPlanetAggregateRows,
}


export default api