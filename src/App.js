import React from 'react';
import LoginForm from './Components/Login/LoginForm';
import Card from './Components/Card/Card';

const App = () => {
  const handleLogin = (credentials) => {
    // Hier kannst du die Logik für die Überprüfung der Anmeldeinformationen implementieren
    console.log(credentials); // Beispiel: { username: 'example', password: 'password' }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
      <Card title="Welcome" content="This is a simple card component" />
    </div>
  );
};

export default App;
