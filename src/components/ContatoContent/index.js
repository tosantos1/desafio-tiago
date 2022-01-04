import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import styles from './styles.module.scss';

export function ContatoContent() {

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [emptyValue, setEmptyValue] = useState('');

  const handleChange = (e) => {
    let newProp = form;
    newProp[e.target.name] = e.target.value
    setForm(newProp)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some(obj => obj === "")
    setEmptyValue(emptyValues)
  }

  function VerificationSubmit() {
    if (emptyValue) {
      toast.success("Cadastrado foi enviado com sucesso!");
    }
  }

  return (
    <main className={styles.Container} >
      <div className={styles.Content}>
        <h2>Informe seus dados para entrar em contato</h2>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <label >
            Nome
            <input type="text" name="name" onBlur={(e) => handleChange(e)} />
            {emptyValue && form["name"] === "" ? <span className={styles.error}>Preencha o campo</span> : ""}
          </label>
          <label >
            Email
            <input type="email" name="email" onBlur={(e) => handleChange(e)} />
            {emptyValue && form["email"] === "" ? <span className={styles.error}>Preencha o campo</span> : ""}
          </label>
          <button className={styles.submit} type="submit" onClick={VerificationSubmit} >
            Enviar
          </button>
        </form>
        <ToastContainer />
      </div>
    </main >
  )
}