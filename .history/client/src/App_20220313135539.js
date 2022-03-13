import './App.css';
import {Routes, Route} from "react-router-dom";
import Product from './pages/product';
import Admin from './pages/admin';
import Login from './pages/login';
function App() {
  return (
    <>
          Hey

        <Routes>
          <Route path="/" element={<Product/>} exact />
          <Route path="/login" element={<Admin/>} exact />
          <Route path="/admin" element={<Login/>} exact />
        </Routes>
    </>
  );
}

export default App;
