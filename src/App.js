import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './components/Inicio';
import Personaje from './components/Personaje';

function App() {
  return (
    <div className="contenedor">
      <HashRouter basename='Inicio'>

        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='personaje/:id' element={<Personaje />}></Route>
          </Routes>
        </BrowserRouter>
      </HashRouter>
    </div>
  );
}

export default App;
