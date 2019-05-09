// Is unique:  an algorithm to determine if a string has all unique characters

isUnique = function(myString) {
    if (myString.length > 128) return false;
	
    var listChar = [];
    for (var i = 0; i < myString.length; i++){
        if (listChar.includes(myString[i])) return false;
        else listChar.push(myString[i]);
    }
    return true;
}

var stringUnique = isUnique("Ola");
console.log(stringUnique);
