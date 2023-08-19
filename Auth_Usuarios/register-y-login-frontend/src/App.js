/*Se modules se importa un browser router, routes, y un route que en esta api representa la carpeta routers*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Se importa de la carpeta componentes*/
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";

/*Se importa de la carpeta styles*/
import styles from './App.module.scss'

/*Para poder ejecutar la parte visual de la api se especifica el nombre con el que se ejecuta el puerto*/
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
