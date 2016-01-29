import {List} from 'immutable';

export const ChatBox = (state = List(), action) => {
  switch(action.type){
  case "ADD_MESSAGE":
    return state.push(action.message);
    break;
  default:
    return state;
  }

};


export default ChatBox
