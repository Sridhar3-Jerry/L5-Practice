function selectionSort(arr){
    for(i=0;i<=arr.length-1;i++){
        minIdx=i
        for(j=i+1;j<=arr.length-1;j++){
            if(arr[j].name<arr[minIdx].name){
                let temp = arr[minIdx];
                arr[minIdx] = arr[j];
                arr[j] = temp;
            
            }
        }
    }
    console.log(arr);
    }

    console.log(selectionSort([{name:"sridhar",age:17,mark:99},{name:"sri",age:15,mark:98},{name:"stephen",age:22,mark:100}]));