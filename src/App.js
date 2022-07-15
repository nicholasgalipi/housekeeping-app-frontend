import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './components/admin/AdminScreen';
import AdminEditScreen from './components/admin/AdminEditScreen';
import UserScreen from './components/user/UserScreen';
import UserEditScreen from './components/user/UserEditScreen';
import Login from './components/login/Login';
import EditEmployeeScreen from './components/admin/edit employee/EditEmployeeScreen';
import LoginEmail from './components/login/LoginEmail';
import AppRoutes from './AppRoutes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <AppRoutes> */}
        <Route exact path="/" element={<LoginEmail />} />

        <Route path="admin" element={<AdminScreen />} />
        <Route path="/admin/:roomID" element={<AdminEditScreen />} />
        <Route path="/admin/edit_employee" element={<EditEmployeeScreen />} />

        <Route path="/user/:employeeID" element={<UserScreen />} />
        <Route
          path="/user/:employeeID/edit/:roomNumber"
          element={<UserEditScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
 
  

}

export default App;
