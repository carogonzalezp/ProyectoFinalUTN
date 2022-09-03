import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import InicioPage from './pages/InicioPage';
import QuienessomosPage from './pages/QuienessomosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="quienes-somos" element={<QuienessomosPage />} />
        <Route path="novedades" element={<NovedadesPage />} />
        <Route path="contacto" element={<ContactoPage />} /> 
      </Routes>
      </BrowserRouter>
      <Footer/> 
        
      
    </div>
  );
}

export default App;
