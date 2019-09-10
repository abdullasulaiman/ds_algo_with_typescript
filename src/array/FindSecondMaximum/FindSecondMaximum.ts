const findSecondMaximum = (arr:Array<number>) : number => {
    let max = 0;
    let secondMax = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] > secondMax && arr[j] != max) {
            secondMax = arr[j]
        }
    }
    return secondMax;
}

export {
    findSecondMaximum
}