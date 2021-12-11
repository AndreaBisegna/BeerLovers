import React from 'react';
import Available from './Available';
import store from './Store';
import { add } from './Actions';
import {HiShoppingCart} from 'react-icons/hi';
import './beer.css';


const Beer = ({ nome, prezzo, disponibilità, img, addToCart}) => {
     
    const beerBoxStyle = {
            borderRadius: '20px',
            padding: '15px',
            width: '250px',
            margin: '30px',
            borderColor:'#1e1e1e',
            border: '1px solid',
            boxShadow: '4px 8px 20px 7px #3B0C17'
          
    }

    
   const createObj = () => {
       let obj = {nome: nome, prezzo: prezzo, disponibilità: disponibilità, img: img}
      
     store.dispatch(add(obj));
   }

   const iconStyle = {fontSize: '20px'}
   
 
     
     
    
    return (
        <div style={beerBoxStyle}>
            <ul className="beer-list">
                <li> nome: {nome}</li>
                <li> prezzo: {prezzo}</li>
                <li> disponibilità: {disponibilità ? <span>OK</span> :  <Available/>}</li>
                <img className="img-beer" alt="" src={img} />
                <div className="btn-cont">
                <button className="btn-addToCart" onClick={createObj}> Add to Cart
                <HiShoppingCart style={iconStyle}/>
                </button>
                </div>
            </ul>
        </div>
    );
}





export default Beer;
