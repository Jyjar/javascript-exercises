const sumAll = function(start, end) {

    let finalCount = 0;

    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    if(start < 0 || end < 0) {
        return "ERROR"
    }
    
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"
    }


    for(start; start <= end; start++) {
        finalCount += start;
    }
    return finalCount;

};

// Do not edit below this line
module.exports = sumAll;
