import './App.css';
import {Routes, Route} from "react-router-dom";
import Product from './pages/product';
import Admin from './pages/admin';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Product/>} exact />
          <Route path="/login" element={<Admin/>} exact />
          <Route path="/admin" element={<Product/>} exact />

        </Routes>
    </>
  );
}

export default App;
