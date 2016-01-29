import ChatBox from "./ChatBoxReducer"
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
let store = createStore(ChatBox);
console.log("Hello!",  ChatBox);
setInterval(() =>
            store.dispatch({type:"ADD_MESSAGE", message: "Hello hello"})
            , 1000);

const Chat = React.createClass({
  render:function(){
    return ( <div>
             {this.props.messages.map( (message) => <div>{message}</div>)}
             </div>)
  }
});

const render = () => {
  ReactDOM.render(
      <Chat messages={store.getState()}/>, document.getElementById("app")
  );
}

store.subscribe(render)


