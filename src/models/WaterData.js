const mongoose = require('mongoose');

const WaterDataSchema = new mongoose.Schema({
  // Define los campos del esquema aquí
});

module.exports = mongoose.model('WaterData', WaterDataSchema);