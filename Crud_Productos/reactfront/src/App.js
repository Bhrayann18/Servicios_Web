import logo from './neroCode.jpg';
import './App.css';

//importamos los componentes
import CompShowProductos from './components/ShowProductos';
import CompCreateProducto from './components/CreateProducto';
import CompEditProducto from './components/EditProducto';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*Esta funcion lo que hace es mostrar la parte visual de la carpeta controllers y el logo */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowProductos  />} />
            <Route path='/create' element={ <CompCreateProducto />} />
            <Route path='/edit/:id' element={ <CompEditProducto />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
