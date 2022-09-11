// let x=10;
// let y;
// console.log(x)
// console.log(y)

// let details= {
//   name: "Vishal",
//   age: 23,
//   add: "Delhi",
//   pincode: 110008,
//   math: 78,
//   phy: 78,
//   chem: 78,

// };
// console.log(details);
// console.log(details["phy"]);
// console.log(details.phy);

// let arr= ["Aman"]
// console.log(arr)

// let obj={};
//   obj["name"]= "Vishal";
//   obj.age= 23;
//   obj.location= "Delhi";
//   obj.isMarried=true;
//   console.log(obj);

//   obj["location"]="Goa";
//   console.log(obj);

//   delete obj.age;
//   console.log(obj);

// var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];
// var party = [];
// var present = false;
// for(var i = 0; i<arr.length; i++)
// {
//   for(var j=0; j<party.length; j++)
// {
// if(arr[i] == party[j])
// {
// present= true;
// break;
// }
// }
// if(present == false)
// {
// party.push(arr[i]);
// }
// else
// {
// present = false;
// }
// }
// console.log(party);

// for(let i=5; i>=0; i--){
//   console.log(i)
// }
// let str="abc";
// let string="abcdefghijklmnopqrstuvwxyz";
// let sum=0;
// let obj={};
// for(let i=0;i<string.length;i++){
//   obj[i]=string[i]+"-"+(i+30);
//   // obj[string[i]]=i+30;
//   }
// for(let i in obj){
// console.log(obj[i])
// }

// for(let j=0;j<str.length;j++){
//   for(let i in obj){
//     if(i==str[j]){
//       sum=sum+obj[i];
//       }
//     }
//   }
// console.log(sum);

// for(let i=5;i>=0;i--){
//   let bag="";
//   for(let j=1;j<=i;j++){
//     bag=bag+i+" ";
//   }
//   for (let k = 0; k < 2 * (i-5) - 1; k++) {
//     bag += "*";
//   }
//   console.log(bag)
// }

let num=0;
for(let i=0;i<=5;i++){
let bag="";
  for(let j=1;j<=10;j++){
    if(i==0){
    bag=bag+(num+5)+;
    }
    else{
      if(j==1||j==10){
        bag=bag+"  ";
      }
      else{
        bag=bag+(num+5)+" ";
      }
    }
  }
  num--
  
console.log(bag);
}

// let num=0;
// for(let i=1;i<=9;i++){
// let bag="";
//   for(let j=1;j<=9;j++){
//     if(j==1 || j==9){
//     bag=bag+(num+5)+" ";
//     }
//     else{
//       if(i==0||i==9){
//         bag=bag+(num+5)+" ";
//       }
//       else{
//       bag=bag+(num+5)+" ";
//       }
//     }
//   }
//   // num--;
  
// console.log(bag);
// }

// let str="Naman";
// let line1="";
// for(i=str.length-1;i>=0;i--){
//   line1=line1+str[i]
// }
// let line2="";
// for(i=0;i<str.length;i++){
//   line2=line2+str[i]
// }
// // console.log(line1)
// // console.log(line2)
// if(line1==line2){
//   console.log("Yes");
// }
// else{
//   console.log("No");
// }
