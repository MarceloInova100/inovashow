import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

import HomeView from './views/HomeView';
import CidadeView from './views/Cidade/CidadeView';
import CidadeCadastroView from './views/Cidade/CidadeCadastroView';
import CidadeAtualizarView from './views/Cidade/CidadeAtualizarView';
import ExpositorView from './views/Expositor/ExpositorView';
import PessoaView from './views/Pessoa/PessoaView';
import VendedorView from './views/Vendedor/VendedorView';
import VisitaView from './views/Visita/VisitaView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cidade" element={<CidadeView />} />
          <Route path="/cidade/cadastro" element={<CidadeCadastroView />} />
          <Route path="/cidade/atualizar" element={<CidadeAtualizarView />} />
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
