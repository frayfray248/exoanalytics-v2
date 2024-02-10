export type TimeChartDataSet = {
    label : string,
    data : number[],
}

export type ScatterChartDataSet = {
    label : string,
    data : { x : number, y : number }[]
}

export type DistributionChartData = {
    label : string,
    count : number,
}

export type PlanetsDiscoveredYear = {
    year : number,
    count : number,
}

export type PlanetColumn = {
    name : string,
    description : string,
}