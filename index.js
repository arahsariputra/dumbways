const emailReciver = 'arahsari@gmail.com';

// mengambil sebuah value pada imputan di html
let name = document.getElementById('input-name'); 
let email = document.getElementById('input-email');
let phone = document.getElementById('input-phone');
let subject = document.getElementById('input-subject');
let message = document.getElementById('input-message');

// function 
function submitForm() {
  name = name.value;
  email = email.value;
  phone = phone.value;
  subject = subject.value;
  message = message.value;

  if (!name || !email || !phone || !subject || !message) {
    return alert('All input fields must be not empty');
  }

  const a = document.createElement(`a`);
  a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.target = '_blank';
  a.click();
}
