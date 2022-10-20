//typing animation script

var typed = new Typed(".typeing", {
    strings: ["Designer" , "Developer" , "Freelancer"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
});

var typed = new Typed(".typeing-2", {
    strings: ["Skills" , "Experiences"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
});

// contact form script 


const scriptURL = 'https://script.google.com/macros/s/AKfycbznx9K1Ci73m_zTZGjAvXDYgJiRV3Ogzdw29G-q-CTnUi1NLmLbqgaBEc8r571fTPMd0g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
    
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    msg.innerHTML = "Message sent sucessfully"
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})