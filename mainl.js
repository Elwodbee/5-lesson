let ism = prompt("Ismingizni kiriting");
let newIsm = document.createElement("h1");

newIsm.textContent = ism;
newIsm.className = "salom"

document.body.append(newIsm)
console.log(newIsm);