import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function ClientRegistration() {
  // Routers
  const history = useHistory();

  function goToHome() {
    history.push('/');
  }

  function goToClientList() {
    history.push('/clientRegister/clientList');
  }

  // Register
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [CPF, setCPF] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [UF, setUF] = useState('');
  const [CEP, setCEP] = useState('');

  function registerClient() {
    // let data = [];

    let userInfo = { name, email, phone, CPF, address, city, UF, CEP };

    // data.push(userInfo);

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  function handleName(e) {
    let letters = /^[A-Za-z]+$/;
    if (e.target.value.match(letters)) {
      setName(e.target.value);
    } else {
      alert('Por favor coloque letras');
    }
  }
  function handlePhone(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setPhone(e.target.value);
    } else {
      alert('Por favor coloque números');
    }
  }

  function handleCPF(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setCPF(e.target.value);
    } else {
      alert('Por favor coloque números');
    }
  }

  function handleCEP(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setCEP(e.target.value);
    } else {
      alert('Por favor coloque números');
    }
  }

  return (
    <div id="container">
      <form action="">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insira o nome"
          value={name}
          // onChange={(e) => setName(e.target.value)}
          onChange={handleName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Insira o E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Insira o Telefone"
          value={phone}
          onChange={handlePhone}
        />

        <label htmlFor="CPF">CPF</label>
        <input
          type="text"
          name="CPF"
          id="CPF"
          placeholder="Insira o CPF"
          value={CPF}
          onChange={handleCPF}
        />

        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Insira o Endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Insira o Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label>UF</label>
        <select value={UF} onChange={(e) => setUF(e.target.value)}>
          <option value=""></option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
          <option value="DF">DF</option>
        </select>

        <label>CEP</label>
        <input
          type="text"
          name="CEP"
          id="CEP"
          placeholder="Insira o CEP"
          value={CEP}
          onChange={handleCEP}
        />

        <button onClick={registerClient}>Cadastrar Cliente</button>
        <button onClick={goToClientList}>Clientes Cadastrados</button>
        <button onClick={goToHome}>Página Inicial (Home)</button>
      </form>
    </div>
  );
}