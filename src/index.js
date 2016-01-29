import ChatBox from "./ChatBoxReducer"
import {createStore, applyMiddleware} from 'redux';

let store = createStore(ChatBox);
console.log("Hello!",  ChatBox);
setInterval(() =>
            store.dispatch({type:"ADD_MESSAGE", message: "Hello hello"})
            , 1000);

store.subscribe(() => console.log("State:", store.getState().first(), store.getState().last()))
