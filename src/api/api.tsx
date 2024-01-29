import queries from "@/const/queries"

const archiveFetch = async (query : string, format : string, revalidate : number) => {

    const res = await fetch(`${process.env.EXOPLANET_ARCHIVE_URL}?query=${query}&format=${format}`, { next : { revalidate }})

    if (!res.ok) {
        throw new Error("Error fetching data from exoplanet archive")
    }

    return await res.json()

}

export const getPlanetCountByYear = async () => {

    const data = await archiveFetch(queries.PLANET_COUNT_BY_YEAR, "json", 60)

    return JSON.stringify(data)

}

export const getPlanetColumnNames = async () => {

    const data = await archiveFetch(queries.PLANET_COLUMN_NAMES, "json", 60)

    return JSON.stringify(data)

}

