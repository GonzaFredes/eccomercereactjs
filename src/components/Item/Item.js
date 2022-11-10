import React from 'react'; 
import '../Item/Item.css';
import {Link} from 'react-router-dom';

const Item = ({info}) =>{
    return(
        <Link to={`/detalle/${info.id}`} className='card'>
            <img src={info.img} alt='Auris Hyper X'/>
            <p>{info.name}</p>
            <p>${info.precio}</p>
        </Link>
    )
}

export default Item;