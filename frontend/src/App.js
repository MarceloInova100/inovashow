import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

import HomeView from './views/HomeView';
import CidadeView from './views/CidadeView';
import ExpositorView from './views/ExpositorView';
import PessoaView from './views/PessoaView';
import VendedorView from './views/VendedorView';
import VisitaView from './views/VisitaView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cidade" element={<CidadeView />} />
          <Route path="/expositor" element={<ExpositorView />} />
          <Route path="/pessoa" element={<PessoaView />} />
          <Route path="/vendedor" element={<VendedorView />} />
          <Route path="/visita" element={<VisitaView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
