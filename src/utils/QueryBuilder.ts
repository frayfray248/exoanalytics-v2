import { off } from "process"

export namespace Archive {
    export enum Table {
        PS = 'ps',
        SCHEMA = 'tap_schema.columns'
    }
    export namespace Column {
        export const ALL = '*'
        export enum PS {
            DISC_YEAR = 'disc_year',
            PL_NAME = 'pl_name'
        }
        export enum Schema {
            COLUMN_NAME = 'column_name',
            DESCRIPTION = 'description',
            DATATYPE = 'datatype',
            TABLE_NAME = 'TABLE_NAME'
        }
    }
    export namespace ADQL {
        export namespace Numeric {
            export enum Function {
                COUNT = 'COUNT',
                AVG = 'AVG',
                MAX = 'MAX',
                MIN = 'MIN',
                SUM = 'SUM',
                STDDEV = 'STDDEV',
            }
        }
        export enum DataType {
            INT = 'int',
            DOUBLE = 'double'
        }
    }
    export namespace Types {
        export type Column = Archive.Column.PS | Archive.Column.Schema
    }
}


export type SelectColumn = {

    name: string
    as?: string
    function?: Archive.ADQL.Numeric.Function

}

class QueryBuilder {

    public query: string = "SELECT"

    constructor() {

    }

    select(selectColumns: SelectColumn[] | string[], top? : number) {

        const columns: string[] = selectColumns.map((column) => {

            // selectColumns is an array of strings
            if (typeof column === "string") {
                return column
            }

            // selectColumns is an array of SelectColumn objects
            let name : string = column.name
            if (column.function) {
                name = `${column.function}(${name})`
            }
            if (column.as) {
                name = `${name} AS ${column.as}`
            }

            return name

        })

        this.query += ` ${columns.join(",")}`

        return this

    }

    from(table: Archive.Table) {

        this.query += ` FROM ${table}`
        return this

    }

    where() {

        this.query += " WHERE"
        return this

    }

    columnLike(column: Archive.Types.Column, value: string) {

        this.query += ` ${column} LIKE '${value}'`
        return this

    }

    columnEquals(column: string, value: string) {

        this.query += ` ${column} = '${value}'`
        return this

    }


    columnNotNull(column : string | string[]) {

        this.query += Array.isArray(column) ?
        ` ${column.join(" IS NOT NULL AND ")} IS NOT NULL`
        :
        ` ${column} IS NOT NULL`

        return this
    }

    isDefault() {

        this.query += " default_flag = 1"
        return this
    }

    and() {

        this.query += " AND"
        return this

    }

    or() {

        this.query += " OR"
        return this

    }

    groupBy(column: string) {

        this.query += ` GROUP BY ${column}`
        return this

    }

    orderBy(column: string, direction: "ASC" | "DESC") {

        this.query += ` ORDER BY ${column} ${direction}`
        return this

    }

    valuesIn(column: Archive.Types.Column, values: string[]) {

        this.query += ` ${column} IN ('${values.join("','")}')`
        return this

    }

    format() {

        return this.query
            .replace(/\s+/g, "+")
            .replace(/\'/g, '%27')

    }

    top(limit: number) {

        this.query += ` TOP ${limit}`
        return this

    }

    offset(offset: number) {

        this.query += ` OFFSET ${offset}`
        return this

    }



}

export default QueryBuilder