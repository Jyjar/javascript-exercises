const repeatString = function(string, num) {
    if(num < 0) {
        return "ERROR";
    }
    wholeString = "";
    for (i = 0; i < num; i++) {
        wholeString += string;
    }
    return wholeString;

};

// Do not edit below this line
module.exports = repeatString;
