import React from 'react';

const ButtonShare = (props) => {
return (
        <div className={props.className}>
          {props.children}
        </div>
  );
};

export default ButtonShare;