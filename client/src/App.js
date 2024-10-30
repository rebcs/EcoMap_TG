import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BuscarPontoPopUp from "./pages/BuscarPontoPopUp";
import BuscarOngPopUp from "./pages/BuscarOngPopUp";
import BuscarEmpresaPopUp from "./pages/BuscarEmpresaPopUp";
import ResultadoPontoColeta from "./pages/ResultadoPontoColeta";
import ResultadoOng from "./pages/ResultadoOng";
import ResultadoEmpresa from "./pages/ResultadoEmpresa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/buscar-ponto-coleta" element={<BuscarPontoPopUp/>}/>
      <Route path="/buscar-ong" element={<BuscarOngPopUp/>}/>
      <Route path="/buscar-empresa" element={<BuscarEmpresaPopUp/>}/>
      <Route path="/resultado-ponto-coleta" element={<ResultadoPontoColeta/>}/>
      <Route path="/resultados-ongs" element={<ResultadoOng/>}/>
      <Route path="/resultados-empresas" element={<ResultadoEmpresa/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;