import React from 'react';
import { useAuth } from '../../contexts/auth';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { signed, Logout } = useAuth();

  console.log(signed);

  async function handleLogout() {
    Logout();
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
