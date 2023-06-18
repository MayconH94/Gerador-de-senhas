
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassworld = document.querySelector("#container-passworld");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";
     
    for (let i = 0, n = charset.length; i < sliderElement; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass)
    containerpassworld.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassworld() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
