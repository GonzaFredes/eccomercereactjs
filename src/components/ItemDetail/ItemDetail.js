import React from "react"; 
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"; 

const ItemDetail =({data})=>{
    const onAdd =(quantity)=>{
        console.log(`Compraste ${quantity} unidades`)}
    return(
        <>
        <div className="container">
            <div className="detail">
            <img className="detail__img" src={data.img} alt=""/>
            <div className="content">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <div className="itemPrice">
                    <h2>$ {data.precio}</h2>
                </div>
                <div className="count-cont">
                    <ItemCount initial ={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default ItemDetail;