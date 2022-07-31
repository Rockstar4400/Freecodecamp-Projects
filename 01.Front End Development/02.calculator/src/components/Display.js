import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div className="outputScreen" id="display">
              {this.props.currentValue}
            </div>
          );
        }
    };
export default Display;