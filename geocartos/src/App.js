//import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Contacto } from './components/Contacto/Contacto';
import { Privacidad } from './components/Privacidad/Privacidad';
import { Error404 } from './components/Error404/Error404';


import { IngenieriayConstruccion } from './components/IngenieriayConstruccion/IngenieriayConstruccion';
import { GobiernoySociedad } from './components/GobiernoySociedad/GobiernoySociedad';
import { RecursosNaturalesyMedioAmbiente } from './components/RecursosNaturalesyMedioAmbiente/RecursosNaturalesyMedioAmbiente';
import { MarketingyNegocios } from './components/MarketingyNegocios/MarketingyNegocios';
import { Logistica } from './components/Logistica/Logistica';
import { Capacitacion } from './components/Capacitacion/Capacitacion';

import { Geografiadigital } from './components/Geografiadigital/Geografiadigital';
import { TeledeteccionySensores } from './components/TeledeteccionySensores/TeledeteccionySensores';
import { Plataformasdigitales } from './components/Plataformasdigitales/Plataformasdigitales';

import { Cursoarcgis } from './components/Capacitacion/Cursos/Cursoarcgis/Cursoarcgis';

import { Blog } from './components/Blog/Blog';
import { Articulos } from './components/Blog/Articulos/Articulo';


import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header />

<Routes>
  <Route exact path="/" element={<Home />}/>
  <Route exact path="/home" element={<Home />}/>

  <Route exact path="/IngenieriayConstruccion" element={<IngenieriayConstruccion />}/>
  <Route exact path="/GobiernoySociedad" element={<GobiernoySociedad />}/>
  <Route exact path="/RecursosNaturalesyMedioAmbiente" element={<RecursosNaturalesyMedioAmbiente />}/>
  <Route exact path="/MarketingyNegocios" element={<MarketingyNegocios />}/>
  <Route exact path="/Logistica" element={<Logistica/>}/>
  <Route exact path="/Capacitacion" element={<Capacitacion />}/>

  <Route exact path="/Geografiadigital" element={<Geografiadigital />}/>
  <Route exact path="/TeledeteccionySensores" element={<TeledeteccionySensores />}/>
  <Route exact path="/Plataformasdigitales" element={<Plataformasdigitales />}/>

  <Route exact path="/Contacto" element={<Contacto />}/>
  <Route exact path="/Privacidad" element={<Privacidad />}/>
  
  <Route exact path="/Cursoarcgis" element={<Cursoarcgis />}/>

  <Route exact path="/Blog" element={<Blog />}/>
  <Route exact path="/Pedro" element={<Articulos />}/>

  <Route exact path="*" element={<Error404 />}/>

  
</Routes>

</BrowserRouter>



  

    </div>
  );
}

export default App;