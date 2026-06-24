import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EditarPerfil from './pages/EditarPerfil';
import VisualizarPerfilNutri from './pages/VisualizarPerfilNutri';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona a rota raiz para a tela de visualização */}
        <Route path="/" element={<Navigate to="/perfil" replace />} />
        
        {/* Rota para visualizar os dados */}
        <Route path="/perfil" element={<VisualizarPerfilNutri />} />
        
        {/* Rota para editar os dados */}
        <Route path="/editar-perfil" element={<EditarPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;