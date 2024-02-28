import QueryBuilder, { SelectColumn, Archive } from "./QueryBuilder";

const { Table, Column, ADQL } = Archive
const { PS, Schema } = Column
const { Numeric, DataType } = ADQL

export const buildPlanetDataQuery = (columns: string[], includeNulls: boolean, planetName?: string) => {

    const queryBuilder = new QueryBuilder()

    queryBuilder
        .select(columns)
        .from(Table.PS)
        .where()
        .isDefault()

    if (!includeNulls) {
        queryBuilder
            .and()
            .columnNotNull(columns)
    }

    if (planetName) {
        queryBuilder
            .and()
            .columnEquals(PS.PL_NAME, planetName)
    }


    return queryBuilder.format()
}

export const buildPlanetAggregateQuery = (columns: string[], func: Archive.ADQL.Numeric.Function, top?: number, offset?: number) => {

    const selectColumns = columns.map(column => ({
        name: column,
        as: column,
        function: func
    })) as SelectColumn[]

    const queryBuilder = new QueryBuilder()

    if (top) {
        queryBuilder.top(top)
    }

    queryBuilder
        .select(selectColumns)
        .from(Table.PS)

    if (offset) {
        queryBuilder.offset(offset)
    }

    queryBuilder
        .where()
        .isDefault()

    return queryBuilder.format()
}

export const buildPlanetAggregateGroupsQuery = (column: string) => {

    const query = new QueryBuilder()
        .select([{
            name: column,
            as: "label",
        },
        {
            name: Column.ALL,
            as: "count",
            function: Numeric.Function.COUNT,
        }
        ])
        .from(Table.PS)
        .where()
        .isDefault()
        .groupBy(column)
        .orderBy('count', 'DESC')
        .format()

    return query
}


export const buildPlanetCountByYearQuery = () => {

    const query = new QueryBuilder()
        .select([
            { name: PS.DISC_YEAR, as: "year" },
            { name: Column.ALL, function: Numeric.Function.COUNT, as: "count" }
        ])
        .from(Table.PS)
        .where()
        .isDefault()
        .and()
        .columnNotNull(PS.DISC_YEAR)
        .groupBy(PS.DISC_YEAR)
        .orderBy(PS.DISC_YEAR, "ASC")
        .format()

    return query

}

export const buildPlanetNamesQuery = () => {

    const query = new QueryBuilder()
        .select([
            PS.PL_NAME
        ])
        .from(Table.PS)
        .where()
        .isDefault()
        .format()

    return query

}