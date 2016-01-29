import ChatBox from "./ChatBoxReducer"
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import Chat from "./ChatComponent"


let store = createStore(ChatBox);
console.log("Hello!",  ChatBox);
setInterval(() =>
            store.dispatch({type:"ADD_MESSAGE", message: "Hello hello"})
            , 1000);

const render = () => {
  ReactDOM.render(
      <Chat messages={store.getState()}/>, document.getElementById("app")
  );
}

store.subscribe(render)


