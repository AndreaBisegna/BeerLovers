import {actions} from './Actions';

 const reducerData = (state=[], data ) => {
    
switch (data.type) {
    case actions.ADDBEER:
        console.log(data);
        return { ...state, nome: data.x.nome, prezzo: data.x.prezzo, disponibilità: data.x.disponibilità, img: data.x.img};
        break;
        
        default:
            break;
    }
}

export default reducerData;