export const actions = {
    ADDBEER: "ADDBEER",


}

export const add = ({nome, prezzo, disponibilità, img}) => ({

  x: {
    nome: nome,
    prezzo: prezzo,
    disponibilità: disponibilità,
    img: img 

  },
  
  type: actions.ADDBEER,

});
