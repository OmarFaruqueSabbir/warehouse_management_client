import './App.css';
import Navbar from './components/shared/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import ItemDetail from './components/Home/ItemDetail/ItemDetail';
import ManageInventory from './components/Home/ManageInventory/ManageInventory';
import LogIn from './LogIn/LogIn/LogIn';
import Register from './LogIn/Register/Register';
import AddItems from './components/AddItems/AddItems';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/item/:itemId' element={<ItemDetail />}></Route>
        <Route path='/manageInventory' element={<ManageInventory />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addItems' element={<AddItems />} />
      </Routes>
    </div>
  );
}

export default App;
