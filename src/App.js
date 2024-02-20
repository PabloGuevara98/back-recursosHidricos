import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/UserInterface/Navigation';
import Dashboard from './components/UserInterface/Dashboard';
import DemandProjection from './components/ResourcePlanning/DemandProjection';
import LongTermPlanning from './components/ResourcePlanning/LongTermPlanning';
import WaterQualityAlert from './components/WaterQuality/WaterQualityAlert';
import WaterQualityMonitor from './components/WaterQuality/WaterQualityMonitor';
import PredictionForm from './components/PredictionForm';


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/demand-projection" element={<DemandProjection />} />
        <Route path="/long-term-planning" element={<LongTermPlanning />} />
        <Route path="/water-quality-alert" element={<WaterQualityAlert />} />
        <Route path="/water-quality-monitor" element={<WaterQualityMonitor />} />
        <Route path="/predict" element={<PredictionForm />} />
        {/* Aquí puedes agregar más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;