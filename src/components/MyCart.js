import React from 'react';
import CartItem from './CartItem';
import store from './Store';
const MyCart = () => {

  const printIt = () => {
    console.log(store.getState());
  }
  
  return (
    <div>
      
      <button onClick={printIt}>Click</button>
      {store.getState().items[0].name}
      {
        store.getState().items.map((el, index)=>{

      <CartItem key={index} data={el}/>
        
        }
        )}

        

    </div>
  );
}

export default MyCart;
