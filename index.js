function valMinMax(arr) {
  let sums = arr.reduce((a, b) => a+b, 0)
  let min = sums - Math.max(...arr)
  let max = sums - Math.min(...arr)

  return min + " " + max
}
function matriceCaree(arr) {

  let sum1 = 0, sum2 = 0
  for (let i = 0; i < arr.length; i++) {
    // première diagonale
    sum1 += arr[i][i]
    //deuxième diagonale
    sum2 += arr[i][arr[i].length - (i + 1)]
  }

  return Math.abs(sum1 - sum2)
}
function camelCase(str) {

  if (str == "") return 0

  let count = 1
  for (let i = 0; i < str.length; i++) {
    // la lettre est en majuscule
    if (str[i] == str[i].toUpperCase()) {
      count += 1
    }
  }

  return count

}

function arcadeRank(top_scores, jeu) {

  let scores = []
  //ajouter un élément et ordonner le tableau
  
  //ajouter l'élément au tableau et retourner sa place
  let putInRank = function(score){
    //supprimer les redondances
    let scores_ordered = [...new Set(top_scores)]
    //ajouter le score
    scores_ordered.push(score)
    //ordonner le tableau
    scores_ordered.sort((a, b) => b - a)
    //returner la place du score
    return scores_ordered.indexOf(score) + 1
  }

  for(let i = 0; i < jeu.length; i++){
    let place = putInRank(jeu[i])
    let default_place = Math.min(...scores, place)

    scores.push(default_place)
  }

  return scores

  
}


module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };


