export default function reducer(state, action) {
    switch (action.type) {
      case 'init':
        return {
          cards: action.payload.cards,
        }
  
      case 'add_card':
        return {
          cards: [...state.cards, { ...action.payload.new_card, id: state.cards.length, isExist: true }]
        }
  
      case 'delete_card':
        return {
          cards: state.cards.map(c => c.id === action.payload.id ? { ...c, isExist: false } : c)
        }
  
      case 'increase_like':
        return {
          cards: state.cards.map(c => c.id === action.payload.id ? { ...c, like: c.like + 1 } : c)
        }
  
      case 'decrease_like':
        return {
          cards: state.cards.map(c => c.id === action.payload.id ? { ...c, like: c.like - 1 } : c)
        }
  
      case 'increase_dislike':
        return {
          cards: state.cards.map(c => c.id === action.payload.id ? { ...c, dislike: c.dislike + 1 } : c)
        }
  
      case 'decrease_dislike':
        return {
          cards: state.cards.map(c => c.id === action.payload.id ? { ...c, dislike: c.dislike - 1 } : c)
        }
  
      // case 'like': {
      //   const obj = JSON.parse(localStorage.getItem("contactManagerApp_cards"))
      //   //console.log(obj[action.payload.id].like);
  
      //   // let bien = localStorage.getItem("contactManagerApp_cards");
      //   // let bien1 = JSON.parse(bien);
      //   // let bien2 = bien1[action.payload.id];
      //   // let valueLike = bien2.like;
      //   if ((obj[action.payload.id].like) === false) {
      //     obj[action.payload.id].like = !(obj[action.payload.id].like);
      //     const str = JSON.stringify(obj);
      //     localStorage.setItem("contactManagerApp_cards", str);
      //     // console.log(obj[action.payload.id].like);
      //     return {
      //       cards: state.cards.map(c => c.id === action.payload.id ? { ...c, like: c.like + 1 } : c)
      //     }
      //   } 
      //   if((obj[action.payload.id].like) === true){
      //     obj[action.payload.id].like = !(obj[action.payload.id].like);
      //     const str = JSON.stringify(obj);
      //     localStorage.setItem("contactManagerApp_cards", str);
      //     return {
      //       cards: state.cards.map(c => c.id === action.payload.id ? { ...c, like: c.like - 1 } : c)
      //     }
      //   }
      // }
  
  
      case 'update_filter':
        return {
          ...state,
          query: action.payload
        }
  
      case 'complete_task':
        return {
          ...state,
          items: state.items.map(i => i.id === action.payload ? { ...i, complete: true } : i)
        }
  
      default:
        return state;
    }
  }