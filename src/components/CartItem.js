import React from 'react';

const CartItem = ({data}) => {

  const addItem = (item) => {
    return item + 1;
  }

  const lessItem = (item) =>{
       return item - 1;
  }
  

  return (
    <div>
      <h4>{data.nome}</h4>
      <p>{data.prezzo}</p>
      <img alt="" src={data.img}/>
      <button onClick={()=>addItem(data)}>+</button>
      <button onClick={()=>lessItem(data)}>-</button>
    </div>
  );
}

export default CartItem;
