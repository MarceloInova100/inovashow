import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(
  () => import("dashboard/DashboardApp")
);

const Pessoa = lazy(
  () => import("pessoa/PessoaApp")
);

const Vendedor = lazy(
  () => import("vendedor/VendedorApp")
);

const Visita = lazy(
  () => import("visita/VisitaApp")
);

const Expositor = lazy(
  () => import("expositor/ExpositorApp")
);

const Config = lazy(
  () => import("config/ConfigApp")
);

export function AppRoutes() {
  return (
    <Suspense fallback={<h2>Carregando...</h2>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pessoa" element={<Pessoa />} />
        <Route path="/vendedor" element={<Vendedor />} />
        <Route path="/visita" element={<Visita />} />
        <Route path="/expositor" element={<Expositor />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </Suspense>
  );
}