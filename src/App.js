import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import ItemDetail from './components/Home/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/item/:itemId' element={<ItemDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
