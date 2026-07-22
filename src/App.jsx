import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './assets/pages/Inicio';
import HomeAnotacao from './assets/pages/HomeAnotacoes';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route 
          path='/notas' 
          element={
            <ProtectedRoute>
              <HomeAnotacao />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
