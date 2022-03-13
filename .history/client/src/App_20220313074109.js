import './App.css';
import {Routes, Route} from "react-router-dom";
import Product from './pages/product';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Product/>} exact />
        </Routes>
    </>
  );
}

export default App;
