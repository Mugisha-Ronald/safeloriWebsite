// listen for a message submit

document.querySelector('.contact-form').addEventListener('submit', subMitForm);


function subMitForm(e){
    e.preventDefault();

    // get input values

    let name = document.querySelector('.input-1').value
    let email = document.querySelector('.email').value
    let message = document.querySelector('.message').value


    sendEmail(name,email,message);
    document.querySelector('.contact-form').reset();
}


function sendEmail(name,email,message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'ronaldmugisha993@gmail.com',
        Password: "vfsqrbrhzcbecpgw",
        To: 'info@safelori.com',
        From: 'ronaldmugisha993@gmail.com',
        Subject:`${name} sent you a message`,
        Body:`Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then((message) =>alert("The mail has been successfully sent"))
}

