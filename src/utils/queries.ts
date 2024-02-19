import QueryBuilder, { SelectColumn, Archive } from "./QueryBuilder";

const { Table, Column, ADQL } = Archive
const { PS, Schema } = Column
const { Numeric, DataType } = ADQL

export const buildPlanetDataQuery = (
    columns: string[],
    as: string,
    func: Archive.ADQL.Numeric.Function
) => {

    const selectColumns = columns.map(column => ({
        name: column,
        as: as,
        function: func
    })) as SelectColumn[]

    return new QueryBuilder()
        .select(selectColumns)
        .from(Table.PS)
        .format()
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

    return queryBuilder.format()
}


export const buildPlanetCountByYearQuery = () => {

    const query = new QueryBuilder()
    .select([
        { name: PS.DISC_YEAR, as: "year" },
        { name: Column.ALL, function: Numeric.Function.COUNT, as: "count" }
    ])
    .from(Table.PS)
    .where()
    .columnNotNull(PS.DISC_YEAR)
    .groupBy(PS.DISC_YEAR)
    .orderBy(PS.DISC_YEAR, "ASC")
    .format()

    return query

}