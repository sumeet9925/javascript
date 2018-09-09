//Array.from()

console.log(Array.from("sumeet"))

//Array.of()

console.log(Array.of('sumeet','sharma'))


//copyWithin()

ar = [1,2,34,4,5,7,6]
console.log(ar.copyWithin(0,2,5))

console.log(ar.copyWithin(0,2))

// push and pop
    var ar1 =["sumeet"]
    ar1.push("sharma")
    console.log(ar1);
    ar1.pop("sharma")
    console.log(ar1);

//reverse()

arr = [1,2,3,4,5,6,7]

console.log(arr+" < > "+arr.reverse());

//shift and unshift

arrr= ['sharma']

console.log(arrr.unshift('name','sumeet'));
console.log(arrr);

arrr.shift()
console.log(arrr);


//sort()

arry = [1,3,5,2,7,4,6,4]
console.log(arry.sort());
arry = ['sumeet','pardeep']
console.log(arry.sort());


//splice

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];


console.log(myFish.splice());

console.log(myFish.splice(2));
var Fish = ['angel', 'clown', 'mandarin', 'sturgeon'];


console.log(Fish.splice(1));

//includes

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

//join

var pets = ['cat', 'dog', 'bat',""];

console.log(pets.join('man '));
console.log(pets.join('-'));


//slice


console.log(pets.slice(1, 3));

//to string

console.log(JSON.stringify(pets.toString()));

//entries
next = pets.entries()
console.log(next.next().value);

console.log(next.next().value);

console.log(next.next().value);

//every()

a = [1,2,3,4,5,6,7,8,9]

console.log(a.every((x) => x>10));

console.log(a.some((x) => x>5));


//filter

console.log(a.filter((x) => x>5));


//find()

console.log(a.find((x) => x>7));

//findIndex

console.log(a.findIndex((x) => x==7));