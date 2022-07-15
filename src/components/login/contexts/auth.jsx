import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../sercices/api';
export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const response = await createSession(email,password)
        console.log("login", response.data)
    
    const loggedUser = response.data.user
    const token = reponse.data.token

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token)

    api.defaults.headers.Authorization = `Beares ${token}`

    
      setUser(loggedUser);
      navigate('/');
    }
  };

  const logout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );


export default Authprovider;
