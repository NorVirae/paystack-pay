import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;
