
function partition(arr, low, high){ 
    let pivot = low; 
    for (let i = low + 1; i <= high; i++) { 
        if (arr[i] < arr[low]) {  
            swap(arr, ++pivot, i); 
        } 
    } 
    swap(arr, low, pivot);
    return pivot;
}


function swap(arr, elem1, elem2){
    let temp = arr[elem1];
    arr[elem1] = arr[elem2];
    arr[elem2] = temp;
    return arr;
} 


//References:
//https://github.com/COSC3020/quicksort-IshitaPatel18 (used mainly for debugging)
//https://www.geeksforgeeks.org/java-program-for-iterative-quick-sort/
function quicksort(array) {
    if(array.length <= 1){
        return array;
    }
    let stack = [];
    let top = 0
    let low = 0;
    let high = array.length-1;

    stack[top] = low;
    stack[++top] = high;
    while(top >= 0){
        high = stack[top--];
        low = stack[top--];
        let pivot = partition(array,low,high);
        if(pivot - 1 > low){
            stack[++top] = low;
            stack[++top] = pivot - 1;
        } 
        if(pivot + 1 < high){
            stack[++top] = pivot + 1;
            stack[++top] = high;
        }
    }
    return array;
}
     
var example = [6,3,2,8,5,9,7];
console.log(quicksort(example));
