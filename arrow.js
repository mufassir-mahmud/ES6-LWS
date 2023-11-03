// function number(){
//     return 10;
// }

// const number = () =>{
//     return 10
// }


// const number = () =>  10;
// console.log(number());

// const num = (n) => n;
// console.log(num(10));


// const num = n => n;
// console.log(num(2));

const sum = (a,b) =>{
   a+b; 
} 
// console.log(sum(5,5)); 


var javaScript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries : function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
    }
}

javaScript.printLibraries()