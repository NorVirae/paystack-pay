import './App.css';
import {Routes, Route} from 'react-router-dom';
import Product from './pages/products';
import Admin from './pages/admin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Product/>} />
        <Route path='/admin' exact element={<Admin/>} />
        <Route path='/login' exact element={<Product/>} />

      </Routes>
    </>
  );
}

export default App;
