//Given a string print, the number of times each character appears

let str="anandbhai";

let obj={};

for(let i=0;i<str.length;i++){
  if(obj[str[i]]==undefined){
    // add character in obj
    obj[str[i]]=1;
    }
    else{
      // increment its value
      obj[str[i]]++;
      }
  }
console.log(obj);
