//Given an array find the unique items in the array

let arr = ["Aman", "Pankaj", "Aman", "Chunnu", "Pankaj", "Munnu"]

// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<i; j++){
//   if(arr[i]==arr[j]){
//     console.log(arr[i]);
//   }
//   }
// }

let unique_list={};

for(let i=0; i<arr.length; i++){
  unique_list[arr[i]] = 1;
  }
console.log(unique_list);
