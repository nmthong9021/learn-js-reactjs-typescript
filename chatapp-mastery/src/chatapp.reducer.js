export default function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        message_number: action.payload.number
      }
    case 'add_item': 
      return{
        message_number: state.message_number + 1
      }

    default:
      return state;
  }
}