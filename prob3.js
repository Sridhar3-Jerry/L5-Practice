
// #Implementing  Selection Sort Optimized code for selection sort
function selectionSort(arr){
for(i=0;i<=arr.length-1;i++){
    minIdx=i
    for(j=i+1;j<=arr.length;j++){
        if(arr[j]<arr[minIdx]){
            let temp = arr[minIdx];
            arr[minIdx] = arr[j];
            arr[j] = temp;
        
        }
    }
}
console.log(arr);
}

selectionSort([13,24,1,5,7,9,10]);

