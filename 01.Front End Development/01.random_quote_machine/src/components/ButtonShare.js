import React from 'react';

const ButtonShare = (props) => {
return (
        <div className={props.className}>
          {props.children}
        {/* <a href={props.href}>
            {props.children}
        </a> */}
        </div>
  );
};

export default ButtonShare;