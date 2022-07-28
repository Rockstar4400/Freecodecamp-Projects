import React from 'react';

const ButtonShare = (props) => {
return (
        <div 
          className={props.className} 
          onClick={
            props.sharingFacebook || 
            props.sharingTelegram ||
            props.sharingTwitter ||
            props.copyButton}
          id={props.id}>
          {props.children}
        </div>
  );
};

export default ButtonShare;