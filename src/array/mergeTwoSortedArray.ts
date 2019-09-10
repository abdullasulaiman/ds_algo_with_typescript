const mergeTwoSortedArray = (arr1, arr2) => {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const results = [];
    let i = 0, j = 0,  k = 0;

    while(i < len1 && j < len2) {
        if(arr1[i] < arr2[j]) {
            results[k++] = arr1[i++]
        } else {
            results[k++] = arr2[j++];
        }
    }

    while(i < len1) {
        results[k++] = arr1[i++]
    }
    while(j < len2) {
        results[k++] = arr2[j++]
    }
    return results;
}

export default mergeTwoSortedArray;