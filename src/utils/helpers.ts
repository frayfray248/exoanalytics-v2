export const chunkArray = (array: Array<any>, chunkSize: number) => {
    let chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {

        chunks.push(array.slice(i, i + chunkSize));

    }
    
    return chunks;
}