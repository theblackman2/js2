function valMinMax(arr){

    let min = arr.reduce((a, b) => a+b, 0) - Math.max(...arr)
    let max = arr.reduce((a, b) => a+b, 0) - Math.min(...arr)
    return min + " " + max
}

console.log(valMinMax(
    [2, 4, 10, 28]
))