import { useState } from 'react';
import './App.css';
import Login from './components/login/login'
import MainPage from './components/mainPage/mainPage';
import LoginContainer from './components/login';

function App() {

  const [loginSuccess, setLoginSuccess] = useState(null)
  const [user, setUser] = useState(null)

  function login(user) {
    setUser(user)
    setLoginSuccess(true)
  }

  return (
    <div className="App">
      {
        loginSuccess ? <MainPage user={user} /> : <LoginContainer onLogin={login} />
      }
    </div>
  );
}

export default App;
