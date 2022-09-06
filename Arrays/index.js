// let arr = ["vishal", "anand", "rahul", "gaya"]
// let arr1 = [1,2,3,4,5,6,4]
// console.log(arr[1]);
// console.log(arr.length)
// console.log(arr1.length)
// console.log(arr1[arr.length-2])

// arr1.pop();

// console.log(arr1)

// let arr=[1,3,5,6,8,9];
// for(let i=1; i<=3; i++){
//   arr.pop();
//   }
// console.log(arr);

// let movies=["Bahubali", "KGF", "Pushpa", "Iron Man", "Avengers"];

// for(let i=0; i<=movies.length-1;i++){
//   if(i==[2] || i==[4]){
//     continue;
//   }
// console.log(movies[i])
// }

// let movies=["Bahubali", "KGF", "Pushpa", "Iron Man", "Avengers"];

// for(let i=0; i<=movies.length-1;i++){
//   if(movies[i]=="Pushpa" || movies[i]=="Avengers"){
//     continue;
//   }
// console.log(movies[i])
// }

// let heros = ["Thor", "Spiderman", "Star Lord", "Tony Stark", "Black Panther", "Black Widow"]
// for(let i=0; i<=heros.length-1;i++){
//   if(heros[i]=="Star Lord" || heros[i]=="Black Widow"){
//     continue;
//   }
// console.log(heros[i])
// }


// let marks=[45,56,78,99,100]
// let sum=0;
// for(let i=0; i<=marks.length-1;i++){
//   sum=sum+marks[i];
// }
// console.log(sum);

// let arr = [12,15,8,22,19,27,30,26,45];
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]%2!=0 && (arr[i]%3==0 && arr[i]%5==0)){
//     console.log(arr[i])
//   }
// }
// let n=10
// let bag=0
// for (let i = 0; i < n; i++) {
//   for (let j = n; j >=0; j--) {
//     if(j===i){
//       bag++
//     }
//   }
// }
// console.log(bag)
// let n=100
// let bag=0
// while (n>5) {
//   if(n%5==0 && n%10==0){
//     bag=bag+5
//   }
//   n--
// }
// console.log(bag)
// let n=10
// let bag=0
// while (n>bag) {
//   console.log(++bag)
// n--
// }

// let sum=0
// for(let i=0;i<=20;i+=5){
//   sum+=i
// }
// console.log(sum)

let n=9;
let sum=0;
let previous_sum=0;

for(let current_num=0;current_num<=n;current_num++){
  if(previous_sum==sum){
    sum=current_num+previous_sum;
  }
}
console.log(sum);