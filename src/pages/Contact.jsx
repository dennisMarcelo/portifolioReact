import React from 'react';
import './style/Contact.css';

function Contact() {
  return (
    <main className="contact">
      <h1>Contato</h1>

      <form action="#">
        <input
          type="text"
          placeholder="Nome e Sobrenome"
          required
          maxLength="50"
          minLength="3"
        />
        <input
          type="email"
          placeholder="Email"
          required
        />

        <textarea
          cols="40"
          rows="4"
          placeholder="Digite aqui sua mensagem."
          maxLength="500"
          required
        />

        <button type="submit" className="button">Eviar</button>
      </form>
    </main>
  );
}

export default Contact;
