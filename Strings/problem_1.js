//Problem 1 : Given a string count the number of words in that string

let str="A big brown fox jumps over the lazy dog";
let count=0;

for(i=0;i<=str.length-1;i++){
  if(str[i]==" "){
  count++;
  }
}
if(str=""){
console.log(0)
}
console.log(count+1)