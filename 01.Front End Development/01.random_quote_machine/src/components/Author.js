import React from 'react';

const Author = (props) => {
return (
    <div id={props.id}>
        -{props.author}
    </div>
    );
}

export default Author;