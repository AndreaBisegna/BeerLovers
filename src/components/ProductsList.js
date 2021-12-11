
import React, { useState, useEffect } from 'react'
import FormInput from './FormInput';
import Loading from './Loading';
import Error from './Error';
import axios from 'axios';
import Beer from './Beer';
import store from './Store';
import { add } from './Actions';
import Available from './Available';





const url = "https://run.mocky.io/v3/b7b21e19-68be-432e-8927-579161545b40";

const ProductsList = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const getData = async () => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                setIsLoading(false);
                console.log(res.data);
                setItem(res.data)
            })
            .catch((err) => {
                console.log(err)
                setIsError(true);
            })
    }

    useEffect(() => {
        getData();
    },[]);
    if (isLoading){
       return <Loading/>
    }
    if(isError){
        return <Error/>
    }

   

    const addToCart = (e) => {
        console.log(e);
        
      store.dispatch(add(e))
    }
    
    

    const saveNewItem = (e) => {
      
      setItem([...item, e]);
      
      
    }
    
    return (
        <div>
        <FormInput saveNewItem={saveNewItem}/>
        <div className="production-list">
            {
                item.map((el)=>(

               <Beer key={el.id} {...el} addToCart={addToCart}
                   
               
               />
               
                ))
            }
            </div>
        </div>
    );
}



export default ProductsList;