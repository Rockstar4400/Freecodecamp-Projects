import React from 'react';

const ButtonShare = (props) => {
return (
        <div 
          className={props.className} 
          id={props.id}>
          {props.children}
        </div>
  );
};

export default ButtonShare;