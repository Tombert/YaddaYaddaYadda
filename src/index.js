import ChatBox from "./ChatBoxReducer"
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import Chat from "./ChatComponent"
import React from 'react';
import TextInput from "./TextComponent";

let store = createStore(ChatBox);

const send = (value) =>{
  store.dispatch({type: "ADD_MESSAGE", message: value}); 
}; 

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

store.dispatch({type:"blah"});

