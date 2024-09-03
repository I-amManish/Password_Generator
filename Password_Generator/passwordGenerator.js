document.getElementById("mySubmit").addEventListener("click", function(event) {
    event.preventDefault();

    const length = document.getElementById("userInput").value;

    let charset = "";
    let password = "";

    // collecting inputs
    if(document.getElementById("uppercase").checked){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(document.getElementById("lowercase").checked){
        charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if(document.getElementById("Symbols").checked){
        charset += "~!@#$%^&*()_+-{}[]\":/><,."
    }
    if(document.getElementById("numbers").checked){
        charset += "0123456789"
    }

    if(charset === ''){
        alert("Please select at least 1 character type")
        return;
    }
    

    if(length === "" || length < 1 || length > 10){
        alert("Please enter a number between 1 to 10")
        return;
    }


    password = generatePassword(length, charset)
    document.getElementById("getPassword").innerText = "Generate password: " + password;
});

function generatePassword(length, charset){
    let result = "";

    for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * charset.length)
    result += charset[randomIndex]
}
return result;
}
