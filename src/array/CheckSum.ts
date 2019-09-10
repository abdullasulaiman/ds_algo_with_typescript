const CheckSum = (arr, sum) => {
    const results = []
    for(var i = 0 ; i < arr.length; i++) {
        for(var j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum) {
                results.push([arr[i], arr[j]])
            }
        }
    }
    return results;
}

const CheckSumWithHashSet = (arr, sum) => {
    if(arr.length > 0) {
        var result = findSum(arr, sum);
        if(result[0] + result[1] === sum) {
            console.log("Number 1 = " + result[0]);
            console.log("Number 2 = " + result[1]);
            console.log("Sum = " +  (sum) );
        }
    }
}

const findSum = (arr, sum) => {
    const result = [];
    var set = {};
    for(var i in arr) {
        if(set.hasOwnProperty(sum-arr[i])) {
            result[0] = arr[i];
            result[1] = sum - arr[i];
        }
        set[arr[i]] = arr[i];
    }
    return result;
}

export {
    CheckSum,
    CheckSumWithHashSet
};