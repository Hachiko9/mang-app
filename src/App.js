import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes/Routes";

import './App.css';

function App() {
  const [user, setUser] = useState({});

  return (
      <div className="App">
        <BrowserRouter>
          <Routes user={user} setUser={setUser}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
