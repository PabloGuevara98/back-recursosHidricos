import React, { useEffect, useState } from 'react';

const ConsumptionMonitor = () => {
    const [consumptionData, setConsumptionData] = useState([]);

    useEffect(() => {
        fetchWaterConsumptionData().then(data => setConsumptionData(data));
    }, []);

    return (
        <div>
        <h2>Monitor de Consumo de Agua</h2>
        <ul>
            {consumptionData.map((data, index) => (
            <li key={index}>
                <p>Fecha: {data.date}</p>
                <p>Consumo: {data.consumption} litros</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

async function fetchWaterConsumptionData() {
  // Aquí debes implementar la lógica para obtener los datos de consumo de agua
  // desde tu base de datos o API. Este es solo un ejemplo y debes reemplazarlo
  // con tu propia implementación.
    return [
        { date: '2022-01-01', consumption: 100 },
        { date: '2022-01-02', consumption: 120 },
        // ...
    ];
}

export default ConsumptionMonitor;