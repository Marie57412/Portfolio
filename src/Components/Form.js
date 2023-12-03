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
    <div id='form-section'>
      <h1>Contact</h1>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="user_name">Nom :</label>
          <input type="text" name="user_name" id="user_name" placeholder='Veuillez saisir votre nom' />
        </div>
        <div>
          <label htmlFor="user_email">Email :</label>
          <input type="email" name="user_email" id="user_email" placeholder='Veuillez saisir votre email' />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea name="message" id="message" placeholder='Saisissez votre message'></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default EmailForm;