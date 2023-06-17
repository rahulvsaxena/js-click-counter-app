// //document: HTML code, getElementById: specified h2 tag
// //innerText: value of specified h2 tag
// //getElementById is a function hooked to document object
// //"count-el" is basically the argument passed
// document.getElementById("count-el").innerText=9;


// //declaring variable
// let count=5
// //for output
// console.log(count)

// let myAge=20
// let humanDogRatio=0.6
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge)

let count=0
function increment(){
    count=count+1
    document.getElementById("count-el").innerText=count;
}

function save(){
    let newCount=count+" "
    document.getElementById("prevCount").textContent+=newCount
    count=0
    document.getElementById("count-el").innerText=count;
}
// let number=9
// let string="hi"
// //output 9hi
// console.log(number+string)