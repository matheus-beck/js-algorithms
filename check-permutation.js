// Check Permutation: Given two strings, decide if one is a permutation of the other

isPermutation = function(myString1, myString2) {
    if (myString1.length != myString2.length) return false;
    
    var listChar = Array.from(myString1);
    
    for (var i = 0; i < myString1.length; i++){
        if (listChar.includes(myString2[i])) {
            var index = listChar.indexOf(myString2[i]);
            delete listChar[index];
        }
        else return false;
    }
    return true;
}

var stringPermutation = isPermutation("cara", "arca");
console.log(stringPermutation);
