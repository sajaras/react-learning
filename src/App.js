import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TestPage from './components/TestPage';
import BooksPage from './components/BooksPage';
import { Navigate } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsPage from './components/ContactsPage';
import Login from './components/Login';
import { checkLogin } from './api';
import StatePage from './components/StatePage';
import ThemeTest from './components/ThemeTest';




function App() {

  const [loginState, SetLoginState] = useState(checkLogin());

  const isLoggedIn = () => {
   
    if (loginState) {
      return 1;
    }
    else {
      return 0;
    }

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            {/* example for useContexts  */}
          <Route path="/login" element={!isLoggedIn() ? <Login /> : <Navigate replace to="/books" />} ></Route>
          <Route path="/books" element={isLoggedIn() ? <BooksPage /> : <Navigate replace to="/login" />} ></Route>
          {/*end of  example for useContexts  */}

           {/* application sample */}
           <Route path="/states" element={isLoggedIn() ? <StatePage /> : <Navigate replace to="/login" />} ></Route>

           <Route path="/themetest" element={<ThemeTest/>} ></Route>

           {/* end of application sample */}

        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
