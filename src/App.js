import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './components/admin/AdminScreen';
import AdminEditScreen from './components/admin/AdminEditScreen';
import UserScreen from './components/user/UserScreen';
import UserEditScreen from './components/user/UserEditScreen';
import TelaInicial from './components/login/TelaInicial'
import CadastroUser from './components/admin/CadastroUser'


function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/teste' element={<CadastroUser/>}/>
        <Route path='/admin/newusuario' element={<CadastroUser />}/>

        <Route path='/' element={<TelaInicial />}/>
        <Route path='admin' element={<AdminScreen />}/>
        <Route path='/admin/:roomID' element={<AdminEditScreen />} />
        <Route path='/user/:employeeID' element={<UserScreen/>}/>
        <Route path='/user/:employeeID/edit/:roomNumber' element={<UserEditScreen />} />
       
        
      </Routes>
    </BrowserRouter>
  )
 
  

}

export default App;
