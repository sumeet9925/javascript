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