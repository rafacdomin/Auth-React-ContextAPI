import React from 'react';
import { useAuth } from '../../contexts/auth';

// import { Container } from './styles';

const Login: React.FC = () => {
  const { signed, Login } = useAuth();

  console.log(signed);

  async function handleLogin() {
    await Login({
      email: 'rafaelcodomingues@gmail.com',
      password: '123456',
    });
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
