for(let i = 0; i<= 5; i++){
    console.log("Trong vòng lặp: ",i);
}
console.log("Ngoài vòng lặp: ", i );// gây lỗi vì biến i được khai báo bằng let trong vòng lặp, nó chỉ tồn tại trong vòng lặp. sau khi vòng lặp kết thúc biến i không còn tồn tại nên sẽ bị lỗi