import {actions} from './Actions';

 const reducerData = (state={items: []}, data ) => {
    
switch (data.type) {
    case actions.ADDBEER:
        console.log(data);
    
        return {items: [...state.items, {  nome: data.x.nome, prezzo: data.x.prezzo, disponibilità: data.x.disponibilità, img: data.x.img}]};
        break;
        
        default:
            break;
    }
}

export default reducerData;