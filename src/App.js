import './App.css';
import NavBar from '../src/components/Navbar.js';
import ItemListContainer from '../src/components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings={"Hola, aquí proximamente se mostrarán los productos"}/>
    </div>
  );
}

export default App;
