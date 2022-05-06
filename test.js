let tableau = [2, 12, 22, 9]

function supp(arr){
    for(let i = 0; i <arr.length; i++){
        let also = [...arr]
        console.log(arr)
        also.splice(i, 1)
        console.log(also)
    }
}

supp(tableau)