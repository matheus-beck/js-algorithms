// URLify: Write a method to replace all spaces in a string with '%20'

urlify = function(myString){
    return myString.replace(/ /g, "%20");
}

var test = urlify("Let's test this string ");
console.log(test);
