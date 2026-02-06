let username;
let email;
let password;

document.getElementById("regBtn").onclick = function()
{
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
}

console.log(username);
console.log(password);
console.log(email);