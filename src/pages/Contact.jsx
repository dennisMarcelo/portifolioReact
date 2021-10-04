import React, { useState } from 'react';
import './style/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const sendEmail = async (event) => {
    const url = 'https://portifolio-dms-backend.herokuapp.com/sendToMe';
    const requestData = {
      method: 'POST',
      body: JSON.stringify({ name, email, text }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    const response = await fetch(url, requestData)
      .then((res) => res.json());

    if (response.message === 'Mensasgem enviado com sucesso!') {
      // eslint-disable-next-line no-alert
      window.alert(response.message);
      setName('');
      setEmail('');
      setText('');
    } else {
      // eslint-disable-next-line no-alert
      window.alert('Não foi possivel enviar o email, tente novamente mais tarde.');
    }

    event.preventDefault();
  };

  return (
    <main className="contact">
      <h1>Contato</h1>

      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Nome e Sobrenome"
          maxLength="50"
          minLength="3"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          required
        />

        <textarea
          cols="40"
          rows="4"
          placeholder="Digite aqui sua mensagem."
          maxLength="500"
          onChange={({ target: { value } }) => setText(value)}
          value={text}
          required
        />

        <button type="submit" className="button">Eviar</button>
      </form>
    </main>
  );
}

export default Contact;

// Como fazer fetch: https://pt.stackoverflow.com/questions/455083/react-fetch-post
