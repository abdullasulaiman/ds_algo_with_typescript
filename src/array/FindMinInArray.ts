const FindMinArray = (inputs) => {
    let minValue = inputs[0];
    for(var i = 1 ; i < inputs.length; i++) {
        if( inputs[i] < minValue) {
            minValue = inputs[i];
        }
    }
    return minValue;
}
export {
    FindMinArray
}