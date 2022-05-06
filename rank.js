
function arcadeRank(top_scores, jeu) {

    let scores = []
    //ajouter un élément et ordonner le tableau
  
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
  
    for(let i = 0; i < top_scores.legth; i++){
      let default_place = Math.min(...scores)
      let place = putInRank(jeu[i])
  
      if(place > default_place){
        scores.push(place)
      }else{
        scores.push(default_place)
      }
    }
  
    return scores
  
    
  }