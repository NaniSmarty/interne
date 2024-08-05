import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login'; // Your class component

function LoginWrapper() {
  const navigate = useNavigate();

  return <Login navigate={navigate} />;
}

export default LoginWrapper;
