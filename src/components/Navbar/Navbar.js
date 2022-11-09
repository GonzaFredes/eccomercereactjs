import logo from './images/logo.png';
import CartWidget from '../CartWidget/CartWidget.js';

function NavBar() {
  return (
    <header className="App-header">
      <div className='Logo'>
        <img src={logo} className='Logo-img'></img>
      </div>
      <div className='Botonera'>
        <ul className="Secciones">
          <li className="nav-item">
            <a aria-current="page" href="./index.html">REMERAS</a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="./pages/nosotros.html">PANTALONES</a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="./pages/recursos.html">ZAPATILLAS</a>
          </li>
          <li className="nav-item">
            <a aria-current="page" href="./pages/contacto.html">CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className='carrodeCompras'>
        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar;