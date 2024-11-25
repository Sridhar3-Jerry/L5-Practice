function bubbleSort(a){
    for(i=0;i<=a.length-1;i++){
        for(j=0;j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                let temp=a[j];
                 a[j]=a[j+1];
                 a[j+1]=temp;
            }
        }
    }
    console.log(a);
}
bubbleSort([5,6,1,2,4,3]);