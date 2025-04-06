let mailInput = document.getElementById("mailInput");
let nameInput = document.getElementById("nameInput");
let sendBtn   = document.getElementById("sendBtn"); 
let divUser   = document.getElementById("userInfo");

let clear = () => {
    nameInput.value = "";
    mailInput.value = "";
}

let ErreurStyle = () => {
    mailInput.style.backgroundColor = "pink";
    mailInput.style.borderColor = "red";
    nameInput.style.backgroundColor = "pink";
    nameInput.style.borderColor = "red";
}

let verify = () => {
    let name = nameInput.value.trim();
    let mail = mailInput.value.trim();

    if (mail === "") {
        divUser.innerHTML = "L'email est requis.";
        ErreurStyle();
        return false;
    } 
    else if (name === "") {
        divUser.innerHTML = "Le nom est requis.";
        ErreurStyle();
        return false;
    } 
    else if (!mail.includes('@')) {

        divUser.innerHTML = "L'email doit contenir un '@'.";
        ErreurStyle();
        return false;

    }
    else if (mail !== "" && name !== "") {
        divUser.innerHTML = "Les deux champs sont remplis !";

        mailInput.style.backgroundColor = "";
        mailInput.style.borderColor = "";
        nameInput.style.backgroundColor = "";
        nameInput.style.borderColor = "";
        return true;
    }
}

let helloUser = () => {
    let name = nameInput.value.trim();
    let mail = mailInput.value.trim();

    if (verify()) {

        divUser.innerHTML = "Bonjour " + name + " ,votre e-mail est: " + mail;
        clear();  
    }
}


let clearInWrite=()=>{
    divUser.innerHTML =""
}

mailInput.addEventListener("keypress",clearInWrite);
nameInput.addEventListener("keypress",clearInWrite);

sendBtn.addEventListener("click", helloUser);