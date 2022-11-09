import './App.js';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import React, {useEffect,useState} from 'react';
import NavBar from '../src/components/Navbar/Navbar.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.js';
import Details from './pages/details/details.js';

const App = () => {
  
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:productoId" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}


// function App() {
//   const [products,setProducts] = useState ([]);
//   useEffect (() => {
//   fetch('https://6367c7d2d1d09a8fa61a60c0.mockapi.io/productos')
//    .then(response => response.json())
//    .then(data => setProducts(data))
//    .catch(error => console.log(error)) //promesa para controlar los errores
//   }, []);
//   console.warn('products', products);

//   const onAdd = (quantity) => {
//     console.log ('compraste ${quantity} unidades');
//   }

//   return (
//     <div className="App">
//       <NavBar/>
//       <ItemListContainer greetings={"Hola, aquí se mostrarán los productos"}/>
//       <main> 
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/details" element={<Details />} /> 
//         </Routes>
//       </main>
//       <div>
//        {products.length > 0 ? products.map(product => (
//         <div key={product.id}>
//           <h3>{product.producto}</h3>
//           <img src={product.imagen}></img>
//           <p>{product.descripcion}</p>
//           <ItemCount intial={1} stock={5} onAdd={onAdd} />
//         </div>
//        )) : <h3>No products</h3>}
//       </div>
//     </div>
//   );
// }

export default App;
