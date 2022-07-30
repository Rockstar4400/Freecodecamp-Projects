import React from 'react';

const Message = ({ id, message}) => {
  return (
      <div id={id}>
          {message}
      </div>
      );
  }


export default Message;