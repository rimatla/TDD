const chunkArray = (arr, len) => {
    const chunkedArray = []

    //loop tru array
    arr.forEach(el => {
        // get last element
        const lastEl = chunkedArray[chunkedArray.length - 1]
        
        // check if las el and if last length is equal to the chunk length
        if (!lastEl || lastEl.length === len) {
            chunkedArray.push([el])
        } else {
            lastEl.push(el)
        }
    })

    return chunkedArray
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const len = 2
const chunkedArr = chunkArray(numbers, len)
console.log(chunkArray(chunkedArr));


module.exports = chunkArray