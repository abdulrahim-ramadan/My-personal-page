
function sendMail() {
    
    var tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        message: document.getElementById('message').value,
    };
    
    
    emailjs.send('service_8c19yst', 'template_9ha55nq', tempParams).then(function(res){
        console.log('success', res.status);
       
    })
    alert("Your message has been sent successfully. Thank you ");
}

