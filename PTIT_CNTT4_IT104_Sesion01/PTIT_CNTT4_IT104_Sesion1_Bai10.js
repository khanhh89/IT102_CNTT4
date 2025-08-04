function groupString(arr){
    const groups = {}
    for(let i = 0; i<arr.length; i++){
        const word = arr[i]
        const key = word.split('').sort().join('')
        if(!groups[key]){
            groups[key] = []
        }
        groups[key].push(word)
    }
    const result =[]
    for(const key in groups){
        result.push(groups[key])
    }
    return result
}

const input = ["eat", "tea","tan","ate","nat","bat"]
console.log(groupString(input))