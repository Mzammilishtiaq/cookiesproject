import React from 'react';
import removeCookies from '../Hooks/removeCookies';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const data = sessionStorage.getItem('googleLoginData')
  const parsedata = JSON.parse(data);
  let logouthandle = () => {
    sessionStorage.removeItem('googleLoginData');
    removeCookies('usercookiesname');
    navigate('/login')
  }

  return (
    <div>
      <button onClick={logouthandle}>Logout</button>

      <h1>{parsedata.name}</h1>
      <img src={parsedata.picture} alt={parsedata.name} />
      <p>{parsedata.email}</p>
    </div>
  )
}

export default Logout
