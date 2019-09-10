const FindUniqueIntegers = (inputs) => {
    var setValues = {};
    var uniqueValue;
    for(var i of inputs) {
        if(setValues.hasOwnProperty(i)) {
            setValues[i] += 1;
        } else {
            setValues[i] = 1;
        }
    }
    for(var key in setValues) {
        if(setValues[key] === 1) {
            uniqueValue = key;
            break;  
        }
    }
    return uniqueValue;
}

export {
    FindUniqueIntegers
}