const reverseString = str =>
    str
        .toLowerCase()
        .split('') // split into an array
        .reverse()
        .join('') // join back as a string 


module.exports = reverseString;