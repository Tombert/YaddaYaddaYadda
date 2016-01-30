import ChatBox from "./ChatBoxReducer"
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import Chat from "./ChatComponent"
import React from 'react';
import TextInput from "./TextComponent";
import io from "socket.io-client";

let store = createStore(ChatBox);

let socket = io("localhost:3000");
const send = (value) =>{
  socket.emit("chat message", value);
//  store.dispatch({type: "ADD_MESSAGE", message: value}); 
}; 


socket.on("chat message", (message) =>{
  store.dispatch({type: "ADD_MESSAGE", message}); 
});
const render = () => {
  ReactDOM.render(
    (<div>
     <Chat messages={store.getState()} />
     <TextInput send={send} />


       </div>)
      , document.getElementById("app")
  );
}


store.subscribe(render)




render();

