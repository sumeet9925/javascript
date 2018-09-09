var str = "Sumeet";
var str1 ="Sharma fine";
//charAt
    console.log(str.charAt(0));
    console.log(str[1]);
//charCodeAt
    console.log( str.charCodeAt(0) + " is equals to the value " + str.charAt(0) );

//concat
console.log(str.concat(" ", str1))

//includes
if(str1.includes('fine')){
    console.log('found');
}else{
    console.log('Not found');
}

//endsWith
    console.log(str1.endsWith('fine'));
    console.log(str1.endsWith('Sharma',6))

//indexOf
    var paragraph = 'The quick brown fox jumped over the lazy dog. If the dog barked, was it really lazy?';

    console.log(paragraph.indexOf('lazy'));

    console.log(paragraph.indexOf('dog',paragraph.indexOf('dog')+1));//the index of second dog from the first dog

//lastIndexOf
console.log(paragraph.lastIndexOf('dog'))

//localeCompare

    var str3 = "ab";
    var str4 = "CD";
    console.log(str3.localeCompare(str4));

//match
var paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
var regex = /[A-Z]/g;

found  = paragraph.match(regex);
console.log(found)

// padEnd & padStart
newstr = str.padEnd(25, '+')
console.log(newstr)
console.log(newstr.padStart(35, '+'))

//repeat
console.log(str.repeat(10))

//.replace

var p = 'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy?';
var regex1 = /dog/gi;
function cat(){
    return 'ballu';
}
console.log(p.replace(regex1, cat()))

//slice

sliced = p.slice(10, 20)
console.log(sliced)
console.log(p.slice(-19, -12))

//split
console.log(p.split(" "))

//startsWith

console.log(str.startsWith('Sum'));
console.log(str.startsWith('eet', 3));

//split and substring
console.log(str.split("")+" hey it is "+str.substring(3)+" not `it` in my name ")

//toString
str3 = new String("hi iam a string")
console.log(str3.toString());

// trim

str4 = "                    The space is too much"
console.log(str4);
console.log(" `But not after the trim()`  " + str4.trim());

//valueOf

console.log(str3.valueOf());

