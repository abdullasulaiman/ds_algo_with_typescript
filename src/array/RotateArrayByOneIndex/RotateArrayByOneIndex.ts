const rotateArray = (arr:Array<number>, rotateBy: number) : void => {
    for(var i =0; i < rotateBy; i++) {
        leftRotate(arr, arr.length);
    }
}

const leftRotate = (arr:Array<number>, len: number) :void => {
    var i, temp; 
    var n = arr.length;
    temp = arr[0]; 
    for (i = 0; i < n - 1; i++) 
        arr[i] = arr[i + 1]; 
    arr[i] = temp; 
}

export {
    rotateArray
}