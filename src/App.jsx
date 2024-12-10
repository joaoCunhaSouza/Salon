import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Removido o BrowserRouter
import MainSection from './pages/MainSection';
import { Register } from './pages/Register';
import { Schedule } from './pages/Schedule';
import { MassagePage } from './pages/MassagePage';
import { Stock } from './pages/Stock';
import { Employee } from './pages/Employee';
import { Metrics } from './pages/Metrics';
import { Home } from './pages/Home';
import { Header } from './pages/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Container from './container';
import './style.css';

const App = () => (
  <>
    <Container>
      <Header /> {}
    </Container>

    <Routes> {}
      <Route path="/MainSection" element={<MainSection />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Employee" element={<Employee />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/massage" element={<MassagePage />} />
      <Route path="/Stock" element={<Stock />} />
      <Route path="/Metrics" element={<Metrics />} />
    </Routes>
  </>
);

export default App;
