import React from 'react'
import './Animations/Animation.css'
import {BrowserRouter, Navigate, Route,Routes,useLocation} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Assigned from './Pages/Assigned';
import Delivered from './Pages/Delivered';
import AdminDetails from './Pages/AdminDetails';
import { ColorContextProvider } from './Context/ColorModeContext';
import ProductDetails from './Pages/ProductDetails';
import ScrollHelper from './Context/ScrollHelper'
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import {  IDContextProvider } from './Context/IDContextProvider';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import OrderDetails from './Pages/OrderDetails';
function App() {
  return (
    <AuthContextProvider>
    <IDContextProvider>
      <ColorContextProvider>
        <BrowserRouter>
            <ScrollHelper/>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/create_acc" element={<CreateAccount/>}/>
              <Route path="/home" element= {<ProtectedRoute><Dashboard/> </ProtectedRoute>}/>
              <Route path="/assigned" element={<ProtectedRoute><Assigned/></ProtectedRoute>}/>
              <Route path="/delivered" element={<ProtectedRoute><Delivered/></ProtectedRoute>}/>
              <Route path="/product/:id" element={<ProtectedRoute><ProductDetails/></ProtectedRoute>}/>
              <Route path="/order/:id" element={<ProtectedRoute><OrderDetails/></ProtectedRoute>}/>
              <Route path="/admin" element={<ProtectedRoute><AdminDetails/></ProtectedRoute>}/>
              
            </Routes>
        </BrowserRouter>
      </ColorContextProvider>
    </IDContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
