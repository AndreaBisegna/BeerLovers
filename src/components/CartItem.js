import React from 'react';

const CartItem = ({data}) => {

  return (
    <div>
    Ciao
      <h4>{data.nome}</h4>
      <p>{data.prezzo}</p>
      <img alt="" src={data.img}/>
    </div>
  );
}

export default CartItem;
