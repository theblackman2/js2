function valMinMax(arr){
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

    // let places = []

    // //avoir un tableau sans rédondance
    // let top_scores_with_no_red = []
    // for(let i = 0; i < top_scores.length; i++){
    //     if(top_scores[i] !== top_scores[i + 1]) top_scores_with_no_red.push(top_scores[i])
    // }

    // let reversed_scores = top_scores_with_no_red.reverse()

    // parcourir les scores du joueur
        //pour chaque score, parcourir les top_scores en partant de la fin
            //trouver la place du score en checkant si le score est supérieur au score des top_scores
            //garder la place dans un tableau



    // for(let i = 0; i < jeu.length; i++){
    //     let place = top_scores.length
    //     for(let t = top_scores.length-1; t >= 0; t--){

    //     }
    // // }

    // console.log(top_scores_with_no_red)
    // console.log(top_scores_with_no_red.reverse())
}

module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };


