
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Contacto.css';
import { Carousel } from './Carousel';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startSendEmail } from '../action/sendEmal';


export const Contact = () => {

  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    message: '',
    // address: '',
  });

  const { name, email, message  } = formValue;


  const handleSubmit = (e) => {
    e.preventDefault();

    const formValid = () => {
      if (name.length < 2){
        Swal.fire('Error', 'Debe escribir un nombre', 'info');
        return false;
      };
      if (!email.includes('@')){
        Swal.fire('Error', 'Correo no valido', 'info');
        return false;
      };
      if (message.length < 3){
        Swal.fire('Error', 'Escriba su Mesaje de Reservacion ', 'info');
        return false;
      };
      return true;
    };

    if ( formValid() ){

      const data = {
        name,
        email,
        message,
      }
      console.log(data);
      dispatch( startSendEmail(data) ) 
        .then( resp => {
          if (resp.ok){
            console.log(resp.body);
            Swal.fire('Genial', 'Su Solicitud fue enviada correctamente a Fridarte', 'success');
          } else {
            console.log(resp.msg);
            Swal.fire('Error', 'Reintente o revise su conexion', 'error');
          }
        })
        .catch( err => console.log(err));

    };

  };

  const instRef = useRef();
  const faceRef = useRef();
  const whatRef = useRef();
  
  // Handle ancors
  const handleInstagram = () => {
    instRef.current.click();
  };

  const handleFacebook = () => {
    faceRef.current.click();
  };

  const handleWhatsapp = () => {
    whatRef.current.click();
    console.log('clickkk');
  };


  const handleWhatsappChange = () => {
    console.log('Whatsapp was clicked');
  };

  const handleFaceChange = () => {
    console.log('Facebook was clicked');
  };

  const handleInstagChange = () => {
    console.log('Inst was clicked');
  };


  return (
    
    <div>

      <div  className="header">
        <h1 style={{marginTop: 20}} >Contactarnos</h1>
        <div className="socialMedia">
          <a  href="https://www.instagram.com/fridartestudio"
              target="_blank"
              rel="noreferrer"
              ref={instRef}
              onChange={handleWhatsappChange}
              style={{display:'none'}}
          />
          <i className="bi bi-instagram" id="inst" onClick={handleInstagram} ></i>

          <a  href="https://www.facebook.com/fridarteestudio"
              target="_blank"
              rel="noreferrer"
              ref={faceRef}
              onChange={handleFaceChange}
              style={{display:'none'}}
          />
          <i className="bi bi-facebook" id="faceb" onClick={handleFacebook} ></i>

          <a  href="http://wa.me/5354336432"
              target="_blank"
              // rel="noreferrer"
              ref={whatRef}
              onChange={handleInstagChange}
              style={{display:'none'}}
          />
          <i className="bi bi-whatsapp" id="whats" onClick={handleWhatsapp} ></i>
        </div>
      </div>
      <hr />

      <div className="contacto">
        <Carousel />

        <div className="informacionGral">
          <div className="colu1">
            <div id="number">
              <i className="bi bi-telephone-forward-fill"></i>
              <span>+5354336432</span>
            </div>
            <p style={{textAlign: 'center'}}><i id="ilocaticon" className="bi bi-geo-alt" ></i>  Cespedes 316 /Buena Vista y San Luis
                                                                   Sancti Spiritus Cuba
            </p>
            <div className="mapa">
              <img src={process.env.PUBLIC_URL + "/assets/location.jpg"} key="locat" id="loc" style={{maxWidth:190}} alt="location" />
              <Link to={`/single/location`} className="linkMap" >VerMap</Link>
            </div>
          </div>

          <div className="colu2">
            <div className="form">
              <form onSubmit={handleSubmit}
              >
                <div className="divTagReserveYa">
                  <h3 >Reservar</h3>
                </div>
                <h6>Nombre</h6> 
                <input type="text"
                      name="name"
                      value={name}
                      required
                      onChange={handleInputChange}
                      autoComplete="off"
                      />
                <h6>Correo</h6>
                <input type="email"
                      name="email"
                      value={email}
                      required
                      onChange={handleInputChange}
                      autoComplete="off"
                      />
                <h6>Mensaje Reservacion</h6>
                <textarea className="text-area"
                          style={{marginBottom: 15}}
                          name="message"
                          onChange={handleInputChange}
                          value={message}
                          rows="4"
                />
                {/* <h6>Direccion <span>opcional</span></h6>
                <input type="text"
                      name="address"
                      value={address}
                      onChange={handleInputChange}
                      autoComplete="off"
                /> */}
                <button type="submit" className="btn btn-danger" onClick={handleSubmit} >Enviar</button>
              </form>
            </div>
          </div>

    
        </div>  
      </div>
    
    </div>
  )
}
 