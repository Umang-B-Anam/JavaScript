// let arr=[1,2,3,4];
// arr.forEach((val)=>{console.log(val*val)});


// let marks=[90,83,95,97,89]
// let smart=marks.filter((mark)=>mark>90);
// console.log(smart.toString())

prompt_text = prompt("enter number: ");
let number = [];
for (let i = 1; i <= prompt_text; i++) {
    number.push(i);
}
console.log(number);
// console.log(newarray)
// let newarray = number.reduce((acc, ele) => acc + ele, 0);
let newarray = number.reduce((acc, ele) => acc * ele);
console.log(newarray)