// c) Write JS function to validate contents of a form – form should have at least
// one mandatory numerical field and one field to be checked with a regular expression
// (e.g. an e-mail). Fields not passing validation should have their style modified to inform
// the user. The JS function should return false if form fails validation, true if it passes.

const checkEmail = (email) => { const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}
const num = (number) => !isNaN(number);
const onSubmit = (event) => { event.preventDefault();
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    if (!checkEmail(email.value)) { email.classList.add('error')
        document.getElementById('emailError').classList.add('show');
    }
    if (!num(number.value) || !number.value) { number.classList.add('error')
        document.getElementById('numError').classList.add('show');
    }
    if ((!num(number.value) || !number.value) || !checkEmail(email.value)) { return;
    }
}