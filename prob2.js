// Implement the bubblesort algorithm for an array of objects in Javascript. The object is a Student object with name, age, mark. Sort it by age. 

let obj=[{name:"sridhar",age:17,mark:99},{name:"sri",age:15,mark:98},{name:"stephen",age:22,mark:100}];
console.log(obj);

for(i=0;i<=obj.length;i++){
    for(j=0;j<obj.length-i-1;j++){
        if(obj[j].age>obj[j+1].age){
            let temp=obj[j];
            obj[j]=obj[j+1];
            obj[j+1]=temp
        }
    }
}
console.log(obj);