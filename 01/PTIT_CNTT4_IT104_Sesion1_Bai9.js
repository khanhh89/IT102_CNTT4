function mergeSort(arr1, arr2){
    let i= 0 ,j = 0
    const arr = []
    while(i<arr1.length&& j < arr2.length){
        if(arr1[i]<arr2[j]){
            arr.push(arr1[i])
            i++
        }else{
            arr.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        arr.push(arr2[j])
        j++
    }
    return arr
}
const arr1 = [1,2,3,5,9]
const arr2 = [4,6,7,8]
const merge = mergeSort(arr1, arr2)
console.log(merge)