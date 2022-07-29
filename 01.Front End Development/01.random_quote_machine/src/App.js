import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container';

class App extends React.Component {
  state = { 
            back: null, 
            quotes: null, 
            font: null,
            house: null
          };

  componentDidMount() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const divStyles = {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
      FontFace: "Satisfy",
    };

    fetch(
       "https://gist.githubusercontent.com/Rockstar4400/" +
        "7678c57b0cebc5f740973ecb7a2691d0/raw/4cf729b3f97f292b803508dc0c2ed57e8dd15261/" +
        "quotes.json"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          back: (document.body.style.background = divStyles.background),
          font: (document.body.style.fontFamily = divStyles.FontFace),
          quotes: data.quotes,
          house: ''
        })
      );
  }

  render() {
    if (this.state.quotes == null) {
      return <Container />;
    } else {
      return <Container quotes={this.state.quotes} />;
    }
  }
}

export default App;