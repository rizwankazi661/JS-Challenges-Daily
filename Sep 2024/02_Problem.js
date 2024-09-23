//  What is map()?
let num = [1, 2, 5, 8];
let res = num.map((num, i) => {
    return num * 10 + i
})
console.log(res);


//  What is filter()?
let num1 = [2, 5, 7, 9, 0];
let res1 = num1.filter((val) => {
    return val > 4
})
console.log(res1);

//  What is reduce()?
let num2 = [1, 2, 6, 8];
let res3 = num2.reduce((prev, curr) => {
    return prev + curr;
})
console.log(res3);