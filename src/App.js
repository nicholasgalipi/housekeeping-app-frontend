import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './components/admin/AdminScreen';
import AdminEditScreen from './components/admin/AdminEditScreen';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='admin' element={<AdminScreen />}/>
        <Route path='/admin/:roomID' element={<AdminEditScreen />} />

    
       
        
      </Routes>
    </BrowserRouter>
  )
 
  

}

export default App;
