"use strict";
function obj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let nameS = { name: "khanh", age: 100 };
let job = { title: "HS", salary: 0 };
console.log(obj(nameS, job));
