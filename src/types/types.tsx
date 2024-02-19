//// chart data sets

// time
export type TimeChartDataSet = {
    label : string,
    data : number[],
}

export type PlanetsDiscoveredYear = {
    year : number,
    count : number,
}

// scatter
export type ScatterChartDataSet = {
    label : string,
    data : { x : number, y : number }[]
}

// distribution
export type DistributionChartData = {
    label : string,
    count : number,
}

export type PlanetAggregate = {
    value : number,
}

export type PlanetColumn = {
    name : string,
    description : string,
}

export type PSColumnsQueryData = {
    column_name : string,
    description : string,
    datatype : string,
}