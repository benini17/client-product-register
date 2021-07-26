import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import home from '../../assets/ecommerce.jpeg';

export default function Home() {
  const history = useHistory();

  function goToClientRegister() {
    history.push('/clientRegister');
  }

  function goToProductRegister() {
    history.push('/productRegister');
  }

  return (
    <>
      <header>
        <section>
          <p>Loja TemDTudo</p>
          <p>Cadastro de Clientes e Produtos</p>
        </section>
        <section>
          <p>Hiring Coders</p>
        </section>
      </header>

      <div>
        <img id="ecommerce" src={home} alt="Ecommerce" />
        <section id="inputContainer">
          <input
            onClick={goToClientRegister}
            id="clientRegister"
            type="button"
            value="Cadastro de Clientes"
          />
          <input
            onClick={goToProductRegister}
            id="productRegister"
            type="button"
            value="Cadastro de Produtos"
          />
        </section>
      </div>

      <footer>
        <p>test</p>
      </footer>
    </>
  );
}
