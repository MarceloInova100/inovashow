import { BrowserRouter } from "react-router-dom";
import { Menu } from "./layout/Menu";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />

        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}