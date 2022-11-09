import ItemCount from "../ItemCount/ItemCount";
import React from 'react';

export const ItemListContainer = ({greetings}) => {

  const onAdd = (quantity) => {
    console.log ('compraste ${quantity} unidades');
  }

  return (
    <div className="body">
      <div className="contenedorBody">
        <p className="parrafoBody">{greetings}</p>
      </div>
      <div>
        <ItemCount intial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ItemListContainer;