import logo from './logo.svg';
import React from 'react';
import './style.css';          // importa o CSS global
import UserView from './views/UserView'; // importa a View

function App() {
  return (
    <div className="App">
      <UserView />
    </div>
  );
}

export default App;
