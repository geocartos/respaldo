import React from 'react';
import './RecursosNaturalesyMedioAmbiente.css';
import { Footer } from '../Footer/Footer';
import notaambiente1 from '../../images/ambiente/notarecursos1.jpg';
import notaambiente2 from '../../images/ambiente/notarecursos2.jpg';
import notaambiente3 from '../../images/ambiente/notarecursos3.png';
import notaambiente4 from '../../images/ambiente/notarecursos4.png';
import usodesuelo from '../../images/ambiente/usodesuelo.png';
import cartaambiente1 from '../../images/ambiente/cartaambiente1.jpg';
import cartaambiente2 from '../../images/ambiente/cartaambiente2.jpg';
import cartaambiente3 from '../../images/ambiente/cartaambiente3.jpg';

export const RecursosNaturalesyMedioAmbiente = () => {
  return (
    <div>

{/* Portada Ambiental */}
<section className="portadaambiental">

  <div className="container-fluid portadaambi">
    <div className="row">
      <div className="col-md-12  col-sm-12  col-xs-12 text-center">
        <h1>Recursos Naturales y Medio Ambiente</h1>
      </div>
    </div>
  </div>
  
</section>


{/* Notas Ambiental */}
<div className="container notasambiental">
  <div className="row">
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaambiente1} alt="" />
      <h2>Eficiencia</h2>
      <p>Realiza estudios ambientales con mayor alcance, a menor costo y en menos tiempo      </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaambiente2} alt="" />
      <h2>Desempeño</h2>
      <p>Evalúa el progreso de estrategias e iniciativas ambientales con análisis geográficos       </p>
    </div>
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaambiente3} alt="" />
      <h2>Impacto</h2>
      <p>Mide y visualiza el impacto ambiental de diferentes proyectos a través de cartografía digital      </p>
    </div>    
    <div className="col-md-3  col-sm-6  col-xs-12 text-center">
      <img src={notaambiente4} alt="" />
      <h2>Monitoreo</h2>
      <p>Sigue y registra las actividades relacionadas a tu proyecto o estudio para visualizar los cambios espacio temporales  </p>
    </div>
  </div>
</div> 


{/* Contenedor Imagen Full Ambiental 1 */}
<section className="contenedorfullambiental1">
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <p className="lead font-weight-normal">Geocartos te facilita la administración de los recursos naturales adquiriendo, procesando y evaluando los datos geográficos clave para que puedas tomar decisiones adecuadas </p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</section>

{/* Contenedor TextoImagen Ambiental1 */} 
<section className="contenedortextoimagenAmbi1">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cAmbi1texto">


        <h2>Medio Ambiente</h2>

        <h3>Hábitas y Ecosistemas</h3>

        <ul>
          <li><i className="far fa-check-square"></i> Cambio de cobertura vegetales</li>
          <li><i className="far fa-check-square"></i> Corredores Ecológicos</li>
          <li><i className="far fa-check-square"></i> Análisis y representación de flora  y fauna</li>
          <li><i className="far fa-check-square"></i> Entre otras más soluciones</li>
          </ul>

          <h3>Flora y Fauna</h3>

          <ul>
            <li><i className="far fa-check-square"></i> Cambio de cobertura vegetales</li>
            <li><i className="far fa-check-square"></i> Corredores Ecológicos</li>
            <li><i className="far fa-check-square"></i> Análisis y representación de flora  y fauna</li>
            <li><i className="far fa-check-square"></i> Entre otras más soluciones</li>
            </ul>
        
      </div>


      <div className="col-md-6 cAmbi1imagen">

          <img src={usodesuelo} class="img-fluid" alt="Atlas de Riesgo" />

      </div>

    </div>
  </div>
</section>

{/* Contenedor TextoImagen Ambiental2 */}
<section className="contenedortextoimagenAmbi2">
  <div className=".container-fluid contenedorinterno"> 
    <div className="row">

      <div className="col-md-6 cAmbi2imagen">
        <img src={usodesuelo} className="img-fluid" alt="" />
      </div>


      <div className="col-md-6 cAmbi2texto">

        <h2>Gestión e Impacto Ambiental</h2>

        <h3>Normativa Mexicana</h3>

        <ul>
          <li><i className="far fa-check-square"></i> Verificación en cumplimiento de NOM</li>
          <li><i className="far fa-check-square"></i> Corredores Ecológicos</li>
          <li><i className="far fa-check-square"></i> Análisis y representación de flora  y fauna</li>
          <li> Entre otras más soluciones</li>
          </ul>

          <ul>
            <li><i className="far fa-check-square"></i> Cambio de cobertura vegetales</li>
            <li><i className="far fa-check-square"></i> Corredores Ecológicos</li>
            <li><i className="far fa-check-square"></i> Análisis y representación de flora  y fauna</li>
            <li><i className="far fa-check-square"></i> Entre otras más soluciones</li>
            </ul>

      </div>

    </div>
  </div>
</section>

{/* Contenedor Cartas Ambiental 1 */}
<section className="cartasambiental">
  <div className="container ">
    <div className="row">
      
<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top " src={cartaambiente1} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Agricultura de precisión</h5>
      <p className="card-text">Estimación precisa para usar fertilizante, volumen de madera en explotaciones forestales, estimación de rendimientos de cada parcela</p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm mb-5 bg-white rounded">
    <img className="card-img-top " src={cartaambiente2} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Índices de vegetación</h5>
      <p className="card-text">Análisis y estimación del estado de salud de la vegetación, su cobertura, ganancia o pérdida a través del tiempo o el estado de la clorofila para determinar el estado fisiológico de las plantas.            </p>
    </div>
  </div>
</div>

<div className="col-md-4  col-sm-6  col-xs-12 ">
  <div className="card shadow-sm  mb-5 bg-white rounded">
    <img className="card-img-top" src={cartaambiente3} alt=" " />
    <div className="card-body">
      <h5 className="card-title">Estimación de erosión</h5>
      <p className="card-text">Aplicando metodologías para la estimación de la pérdida de suelo en un área determinada y con los resultados establecer medidas de manejo sustentable agrícolas que favorezcan la disminución de la erosión.            </p>
    </div>
  </div>
</div>

    </div>
  </div>
</section>



<Footer />
    </div>
  )
}
