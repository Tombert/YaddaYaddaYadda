import React from 'react';

export const Chat = React.createClass({
  render:function(){
    return ( <div className="chatbox">
             {this.props.messages.map( (message) => <div>{message}</div>)}
             </div>)
  }
});

export default Chat;
