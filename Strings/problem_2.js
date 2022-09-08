//Problem 2 : Given an array of string count the overall total number of characters

let arr=["A", "big", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

let count_total=0;

for(let i=0; i<=arr.length-1;i++){
  count_total+=arr[i].length;
}
console.log(count_total);