function valMinMax(arr){

    if(!arr.length) return "0 0"


    let sums = []

    for (let i = 0; i < arr.length; i++) {
        let other = [...arr]
        other.splice(i, 1)
        sums.push(other.reduce((a, b) => a + b, 0))
    }

    return Math.min(...sums) + " " + Math.max(...sums)
}

function matriceCaree(arr){

    let sum1 = 0, sum2 = 0
    for(let i = 0; i < arr.length; i++){
        // première diagonale
        sum1 += arr[i][i]
        //deuxième diagonale
        sum2 += arr[i][arr[i].length - (i+1)]
    }

    return Math.abs(sum1 - sum2)
}
function camelCase(str){

    if(str == "") return 0

    let count = 1
    for(let i = 0; i < str.length; i++){
        // la lettre est en majuscule
        if(str[i] == str[i].toUpperCase()){
            count += 1
        }
    }

    return count

}

function arcadeRank(top_scores, jeu){
}

module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };


