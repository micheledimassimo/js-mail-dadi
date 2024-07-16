console.log('JS collegato');

//creo un mini database di email con cui fare il check

const a = 'dimassimomichele@gmail.com';
const b = 'alessiovietri@boolean.com';
const c = 'joshuassi@yahoo.it';
const d = 'class130@bos.com';

//richiamo il submit del form
const mailForm = document.querySelector('form');

mailForm.addEventListener(
    'submit',          
    function (event) { 
        console.log('event', event, typeof event);

        event.preventDefault();
        //prendo il valore del form 
        const userMailInput = document.getElementById('Usermail');
        console.log('Usermail', userMailInput.value, typeof userMailInput.value);
        const Usermail = userMailInput.value;
        console.log('EMAIL', Usermail);
        
        //controllo con le mail inserite in variabili 
        if (Usermail == a || Usermail == b || Usermail == c || Usermail == d) {
            document.getElementById('email-checked').innerHTML = 'valida'
        }

        else {
            document.getElementById('email-checked').innerHTML = 'non valida'
        }
        
    }
);