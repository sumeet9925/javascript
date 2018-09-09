//isFinite

function div(x) {
    if (Number.isFinite(1000 / x)) {
      return 'Number is finite.';
    }
    return 'Number is Infinity!';
  }
  
  console.log(div(0));
 
 
  //isInteger

 console.log(Number.isInteger(10/100))


//  parseFloat()
console.log(Number.parseFloat('1.78'))

//parseInt()
console.log(Number.parseInt('1.78'))

//toFixed()

console.log(Number.parseFloat(1.7823).toFixed(2))
