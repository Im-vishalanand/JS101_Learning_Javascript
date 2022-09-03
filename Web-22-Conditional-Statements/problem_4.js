let username = "a@gmail.com";
let pass = "1234";

let inp_username = "a@gmail.com";
let inp_pass = "1234";

if (inp_username == username) {
  if (inp_pass == pass) {
    console.log("User can login");
  }
  else {
    console.log("Wrong password");
  }
}
else {
  console.log("User cannot login");
}

