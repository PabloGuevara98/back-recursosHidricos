import React from 'react';
import WaterQualityAlert from '../WaterQuality/WaterQualityAlert';
import WaterQualityMonitor from '../WaterQuality/WaterQualityMonitor';

const Dashboard = () => {
    return (
        <div>
        <h2>Tablero</h2>
        <WaterQualityAlert />
        <WaterQualityMonitor />
        {/* Aquí puedes agregar otros componentes o información que quieras mostrar en el tablero */}
        </div>
    );
};

export default Dashboard;