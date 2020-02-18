import React from 'react';

const LoginForm = () => {
  const inputTypes = ['text', 'password'];

  const validateForm = (input) => {
    const inputField = document.querySelector(`input[name="${input}"]`);
    if (!inputField.validity.valid) {
      inputField.nextElementSibling.classList.add('login__form--error--invalid');
    } else {
      inputField.nextElementSibling.classList.remove('login__form--error--invalid');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const frmField = document.querySelector('form[name="frmLogin"]');

    if (frmField.checkValidity()) {
      sessionStorage.setItem('token', 'token');
      window.history.pushState(null, null, '/app1');
    } else {
      Array.from(frmField.elements).forEach((input) => {
        if (inputTypes.indexOf(input.type) >= 0) {
          validateForm(input.name);
        }
      });
    }
  };

  return (
    <form
      className="login__form"
      name="frmLogin"
      noValidate
      onSubmit={handleSubmit}>
        <div className="login__form__logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactlogo"/>
        </div>
        <input
          placeholder="user"
          name="user"
          required
          type="text"/>
        <label className="login__form--error">
            E-mail inválido
        </label>
        <input
          placeholder="pass"
          required
          name="pass"
          type="password"/>
        <label className="login__form--error">
          Senha inválida
        </label>
        <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
