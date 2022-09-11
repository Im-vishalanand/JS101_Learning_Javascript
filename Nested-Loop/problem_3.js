//Print pattern

for(let i=1;i<=10;i++){
  let bag="";
  for(j=1;j<=10;j++){
    if(j==1 ||j==10){
    bag=bag+"*";
    }
    else{
      if (i==1 || i==10) {
        bag=bag+"*";        
      }
      else{
      bag=bag+" ";
      }
    }
  }
  console.log(bag);
}