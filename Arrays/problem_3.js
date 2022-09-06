//Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr = [100,40,60,100]

let sum=0;
let count=0;

for(let i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum+=arr[i];
    count++
  }
}
console.log(sum/count);