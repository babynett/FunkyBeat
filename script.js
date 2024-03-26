
const form = document.querySelector('form');


function sendEmail(){
    sendEmail.send({
        Host : "smtp.elasticemail.com",
        Username : "boyparamio@gmail.com",
        Password : "34CF023398BAC4AA82CC98254944A79FB5A0",
        To : 'boyparamio@gmail.com',
        From : "boyparamio@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message=> alert("mail sent successfully")
    )
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

// credentials username: boyparamio@gmail.com, password: 34CF023398BAC4AA82CC98254944A79FB5A0, server: smtp.elasticemail.com port: 