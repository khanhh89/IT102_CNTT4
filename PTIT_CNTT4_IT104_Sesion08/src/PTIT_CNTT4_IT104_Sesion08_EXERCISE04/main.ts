function obj<T,U>(obj1:T, obj2:U):T&U{
    return {
        ...obj1, ...obj2
    }
}

let nameS = {name:"khanh", age:100}
let job = {title: "HS", salary: 0}
console.log(obj(nameS, job))