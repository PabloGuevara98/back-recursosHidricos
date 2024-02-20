const tf = require('@tensorflow/tfjs');
const WaterData = require('../models/WaterData');

async function makePrediction(data) {
  // Almacenar los datos en la base de datos
    const waterData = new WaterData(data);
    await waterData.save();

    // Realizar la predicción con TensorFlow.js
    const prediction = tf.tidy(() => {
        // Define el modelo y realiza la predicción aquí
    });

    return prediction;
}

module.exports = {
    makePrediction,
};