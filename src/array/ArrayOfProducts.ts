// Challenge 4: Array of Products of All Elements Except Itself
// Given an array, return an array where each index stores the product of
// all numbers except the number on the index itself. 
// Implement your solution in Javascript and see if your output matches the expected output!
// Sample Input arr = [1,2,3,4]
// Sample Input arr = [24,12,8,6]

// Big O(n2)
const ArrayOfProducts = (input: Array<any>): Array<Number> => {
    const results = [];
    for(var i = 0; i < input.length; i++) {
        var product = 1;
        for(var j = 0; j < input.length; j++) {
            if( j == i) {
                continue;
            }
            product *= input[j];
        }
        results[i] = product;
    } 
    return results;
}

const ArrayOfProductsOption2 = (input: Array<any>): Array<Number> => {
    const results = [];
    const count = input.length;
    let temp = 1;
    for(var j=0; j < count; j++) 
      results[j] = 1; 
    // [1,1,1,1]  
    for(var i = 0; i< count; i++)
    {
        results[i] = temp;
        temp *= input[i];
    }
    // [1,2,3,4]
    // [1,1,2,6]
    console.log(results);
    temp = 1;
    for(var i = count-1; i >= 0; i--) {
        results[i] *= temp;
        temp *= input[i];
    }
    console.log(results);
    return results;
}

export {
    ArrayOfProducts,
    ArrayOfProductsOption2
}