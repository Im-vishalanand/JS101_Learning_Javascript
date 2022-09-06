//Problem 2 : Given a character in lower case print the upper case character

let char = "j";
let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arr1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

for (let i = 0; i < arr.length-1; i++) {
  if(char==arr[i]){
    char=arr1[i];
  }
}
console.log(char);