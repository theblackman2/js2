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
    //effacer la rédondance dans le tableau
    let top_scores_red = []
    for(let i = 0; i < top_scores.length; i++){
        if(top_scores[i] !== top_scores[i + 1]) top_scores_red.push(top_scores[i])
    }

    let scores = []

    for(let i = 0; i < jeu.length; i++){
        let default_place = top_scores_red.length + 1
        for(let t = 0; t < top_scores_red.length; t++){
            console.log(jeu[i], top_scores_red[t])
            if(jeu[i] > top_scores_red[t]){
                default_place = 1
                break
            }
            if(jeu[i] < top_scores_red[t]){
                default_place = top_scores_red.indexOf(top_scores_red[t]) + 2
            }else if(jeu[i] = top_scores_red[t]){
                default_place = top_scores_red.indexOf(top_scores_red[t]) + 1
            }
        }
        scores.push(default_place)
    }

    return scores
}

console.log(
    arcadeRank(
        [100,90,90,80],
        [70,80,105]
    )
)

module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };


