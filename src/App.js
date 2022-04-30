import './App.css';
import Navbar from './components/shared/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import ItemDetail from './components/Home/ItemDetail/ItemDetail';
import ManageInventory from './components/Home/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/item/:itemId' element={<ItemDetail />}></Route>
        <Route path='/manageInventory' element={<ManageInventory />} />
      </Routes>
    </div>
  );
}

export default App;
