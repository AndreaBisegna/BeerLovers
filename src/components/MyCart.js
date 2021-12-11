import React from 'react';
import store from './Store';
const MyCart = () => {

  const printIt = () => {
    console.log(store.getState());
  }
  
  return (
    <div>
      
      <button onClick={printIt}>Click</button>
    </div>
  );
}

export default MyCart;
