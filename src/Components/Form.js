import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() {
  const [successMessage, setSuccessMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xmlr0jp', 'template_tg7po18', e.target, 'aNH5b2MNMTv4eVQEk')
      .then((result) => {
        setSuccessMessage('Votre e-mail a bien été envoyé !');
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='form-section'>
      <h1>Contact</h1>
      <form onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='veuillez saisir votre nom'/>
        <input type="email" name="user_email" placeholder='veuillez saisir votre email' />
        <textarea name="message" placeholder='saisissez votre message'/>
        <button type="submit">Envoyer</button>
      </form>
      {successMessage && <p>{successMessage}</p>} 
    </div>
  );
}

export default EmailForm;