 function scrollToSection(id) {
    var section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
}

  

function sendMe() {
    let error = false;
  
    const email = document.querySelector('#email');
    const name = document.querySelector('#name')
    if (!email.checkValidity()) {
      email.classList.add('invalid');
      error = true;
    }
    else {
      email.classList.remove('invalid');
    }
  
    if (!error) {
      alert('Você se cadastrou com sucesso!');
      email.value = '';
      name.value = '';
    }
}