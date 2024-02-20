import React, { useEffect, useState } from 'react';

const WaterQualityAlert = () => {
    const [waterQuality, setWaterQuality] = useState(null);

    useEffect(() => {
        fetchWaterQuality().then(quality => setWaterQuality(quality));
    }, []);

    if (waterQuality < 50) {
        return <div className="alert">¡Alerta! La calidad del agua es baja: {waterQuality}</div>;
    }

    return null;
};

async function fetchWaterQuality() {
  // Aquí debes implementar la lógica para obtener la calidad del agua
  // desde tu base de datos o API. Este es solo un ejemplo y debes reemplazarlo
  // con tu propia implementación.
    return 45;
}

export default WaterQualityAlert;