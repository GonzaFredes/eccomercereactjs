import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/cart';
import Home from './components/Home/home';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/todo' element={<ItemListContainer/>} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
   </Routes>
   </BrowserRouter>
   </>
    
  );
}

export default App;