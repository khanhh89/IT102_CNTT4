function resetArr(arr1, arr2, position){
    if(position<0||position>arr1.length){
        console.log("Du lieu khong hop le!!")
        return
    }
    const newArr = []
    for(let i =0;i<position;i++){
        newArr[newArr.length] = arr1[i]
    }
    for(let i = 0; i<arr2.length; i++){
        newArr[newArr.length]=arr2[i]
    }
    for(let i =position; i<arr1.length;i++){
        newArr[newArr.length]=arr1[i]
    }
    return newArr
}

console.log(resetArr([1,2,3,7,8],[4,5,6],3))
console.log(resetArr(['a','b','e','f'], ['c','d'], 2))