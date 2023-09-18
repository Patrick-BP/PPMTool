 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/Landingpage'
import SaveAndUpdateproject from './pages/SaveAndUpdateproject';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='/projectform' element={<SaveAndUpdateproject/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
    
  );
}

export default App;
