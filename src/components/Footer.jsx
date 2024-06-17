import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contac">
          <h4>Contacto</h4>
          <p><FaPhone /> +34 123 456 789</p>
          <p><FaEnvelope /> contacto@farmaciaejemplo.es</p>
          <p><FaMapMarker /> Calle Ejemplo, 123, Málaga, España</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#politica-privacidad">Política de Privacidad</a></li>
            <li><a href="#terminos-servicio">Términos de Servicio</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Todos los derechos reservados © {new Date().getFullYear()} | Farmacia Ejemplo</p>
      </div>
    </footer>
  );
};

export default Footer;
