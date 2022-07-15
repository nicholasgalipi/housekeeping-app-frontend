import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import LoginEmail from './components/login/LoginEmail';
import Login from './components/login/Login';

import { Authprovider, AuthContext } from './components/login/contexts/auth';


const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);


    if (loading) {
        return <div className="loading">Carregando...</div>
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Authprovider>
        <Routes>
          <Route exact path="/" element={<LoginEmail />} />
          <Route
            exact
            path="/login"
            element={
              <Private>
                <Login />
              </Private>
            }
          />
        </Routes>
      </Authprovider>
    </Router>
  );
};

export default AppRoutes;
