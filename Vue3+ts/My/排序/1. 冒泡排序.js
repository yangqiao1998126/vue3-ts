var arr = [5,1,3,6,2,4]

function maopao(arr){
    var swap
    for(let i = 0 ; i <arr.length -1  ; i++ ) {
        for(let j = 0 ; j <arr.length-1 -i  ; j++ ) {
            if(arr[j]>arr[j+1]){
                swap=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=swap;
            }
        }
    }
    return arr
}

//console.log(maopao(arr));
arr.splice(1,0,333)
console.log(arr)
