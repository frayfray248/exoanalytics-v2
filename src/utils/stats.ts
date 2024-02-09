const calculateMean = (array : number[]) => {
    const sum = array.reduce((acc, value) => acc + value, 0)
    return sum / array.length
}

const calculateStandardDeviation = (array : number[], mean : number) => {
    const squaredDifferences = array.map(value => Math.pow(value - mean, 2))
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / array.length
    return Math.sqrt(variance)
}

const removeOutliers = (array : number[], threshold : number) => {
    const mean = calculateMean(array)
    const stdDev = calculateStandardDeviation(array, mean)

    const filteredArray = array.filter(value => {
        const zScore = Math.abs((value - mean) / stdDev)
        return zScore <= threshold
    });

    return filteredArray
}

const removeOutliersFromObjectArrayByKey = (array : { [key: string]: any }[], threshold : number, key : string) => {

    // Get values from array of objects by a key
    const values = array.map(obj => obj[key])

    // Remove outliers from values
    const filteredValues = removeOutliers(values, threshold)

    // Filter array of objects by values
    const filteredArray = array.filter(obj => filteredValues.includes(obj[key]))
    return filteredArray
}

const removeOutliersFromObjectArray = (array : {[key: string]: number }[], threshold : number) => {

    for(let key in array[0]) {
        array = removeOutliersFromObjectArrayByKey(array, threshold, key)
    }

    return array

}


export default { calculateMean, calculateStandardDeviation, removeOutliers, removeOutliersFromObjectArrayByKey, removeOutliersFromObjectArray }