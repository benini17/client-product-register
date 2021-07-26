import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ClientList() {
  const history = useHistory();
  const { userInfo, setUserInfo } = useState([]);
  console.log('ClientList -> setUserInfo', setUserInfo);

  useEffect(() => {
    let userInfo = localStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    setUserInfo(userInfo);
  }, []);

  function goToClientRegistration() {
    history.push('/clientRegister');
  }

  function goToHome() {
    history.push('/');
  }

  return (
    <div>
      <p>{userInfo}</p>
      {/* <table>
        <tr key={userInfo.CPF}>
          <td>{userInfo}</td>
          <td>{userInfo}</td>
          <td>{userInfo[1]}</td>
          <td>{userInfo[2]}</td>
          <td>{userInfo[4]}</td>
          <td>{userInfo[5]}</td>
          <td>{userInfo[6]}</td>
          <td>{userInfo[7]}</td>
        </tr>
      </table> */}
      <button onClick={goToClientRegistration}>Tela de Cadastro</button>
      <button onClick={goToHome}>Página Inicial (Home)</button>
    </div>
  );
}
