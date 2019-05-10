// URLify: Write a method to replace all spaces in a string with '%20'

urlify = function(myString, length){
	return myString.replace(/ /g, "%20");
}

var myTest = "Let's test this string "
var result = urlify(myTest, myTest.length);
console.log(result);