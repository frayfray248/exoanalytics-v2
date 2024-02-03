import queries from "@/const/queries"

import { PlanetsDiscoveredYear } from "@/types/types"

const archiveFetch = async (query : string, format : string, revalidate : number) => {

    const res = await fetch(`${process.env.EXOPLANET_ARCHIVE_URL}?query=${query}&format=${format}`, { next : { revalidate }})

    if (!res.ok) {
        throw new Error("Error fetching data from exoplanet archive")
    }

    return await res.json()

}

export const getPlanetCountByYear = async () => {
    'use server'

    const data = await archiveFetch(queries.PLANET_COUNT_BY_YEAR, "json", 60)

    const planetsDiscoveredYears : PlanetsDiscoveredYear[] = data.map(
        (item : { disc_year : number, planet_count : number }) => 
        ({ year : item.disc_year, count : item.planet_count}))

    return planetsDiscoveredYears

}

export const getPlanetColumnNames = async () => {

    const data = await archiveFetch(queries.PLANET_COLUMN_NAMES, "json", 60)

    return JSON.stringify(data)

}

export default {
    getPlanetCountByYear,
    getPlanetColumnNames
}

