import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/report-generator">Generador de Informes</Link></li>
            <li><Link to="/demand-projection">Proyección de la Demanda</Link></li>
            <li><Link to="/long-term-planning">Planificación a Largo Plazo</Link></li>
            <li><Link to="/water-quality-alert">Alerta de Calidad del Agua</Link></li>
            <li><Link to="/water-quality-monitor">Monitor de Calidad del Agua</Link></li>
        </ul>
        </nav>
    );
};

export default Navigation;