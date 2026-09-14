import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //É o componente que habilita o sistema de rotas na nossa aplicação.
import Home from './pages/Home'
import Detalhes from './pages/Detalhes'

function App() {
  return (
    <BrowserRouter basename="/game-explorer">
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App