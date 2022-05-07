import React from 'react';

class Button extends React.Component {

  render(){
    //console.log(this.state)
    return (
        <button 
        id={this.props.id}
        className={this.props.passclass} 
        onClick={this.props.clickHandler}
        >
          {this.props.children}
        </button>
    );
  }
};

export default Button;