function valMinMax(arr){}
function matriceCaree(arr){

    let sum1 = 0, sum2 = 0
    for(let i = 0; i < arr.length; i++){
        sum1 += arr[i][i]
        sum2 += arr[i][arr[i].length - (i+1)]
    }

    return Math.abs(sum1 - sum2)
}
function camelCase(str){

    let count = 1
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            count += 1
        }
    }

    return count

}
function arcadeRank(top_scores, jeu){}

module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };


