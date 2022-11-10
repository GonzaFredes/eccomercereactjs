import Item from '../Item/Item';
import React from 'react';  

const ItemList = ({data = []}) =>{
    return(  
        
        data.map(products => <Item key={products.id} info={products} />)
        
    );
}

export default ItemList;