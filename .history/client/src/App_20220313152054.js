import './App.css';
import {Routes, Route} from 'react-router-dom';
import Product from './pages/products';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Product/>} />
        <Route path='/admin' exact element={<Product/>} />
        <Route path='/' exact element={<Product/>} />

      </Routes>
    </>
  );
}

export default App;
