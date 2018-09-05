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