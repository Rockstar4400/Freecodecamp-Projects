import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "./Image";
import ButtonShare from "./ButtonShare";
import Message from "./Message";
import Author from "./Author";
import Logo from "./Logo";
import ContainerNoData from "./ContainerNoData";

class Container extends React.Component {
  clickHandler = this.clickHandler.bind(this);
  sharingFacebook = this.sharingFacebook.bind(this);

  clickHandler() {
    // Random colors
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    //Random fonts
    const fonts = ["Beau Rivage", "Cinzel", "Kaushan Script", "Nanum Myeongjo"];
    const fontRandom = fonts[Math.floor(Math.random() * fonts.length)];

    const divStyles = {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
      FontFace: fontRandom,
    };
    if (this.props.quotes !== undefined) {
      this.setState({
        back: (document.body.style.background = divStyles.background),
        font: (document.body.style.fontFamily = divStyles.FontFace),
        quotes: this.props.quotes,
        house: "",
      });
    }
  }

  sharingFacebook(){
    var fbButton = document.getElementById('fb-share-button');
    var url = window.location.href;
    
    fbButton.addEventListener('click', function() {
      window.open(
        'https://www.facebook.com/sharer/sharer.php?p[title]=Prueba&u=' + url,
          'facebook-share-dialog',
          'width=800,height=600'
      );
      return false;
    });
  }

  render() {
    const quotes = this.props.quotes;

    if (quotes == null) {
      return (
        <ContainerNoData />
      );
    } else {
      const listItems = quotes.map((quote) => (
        <figure
          key={quote.quote}
          author={quote.author}
          house={quote.house}
          className="card-body"
        >
          <blockquote>{quote.quote}</blockquote>
        </figure>
      ));
      const max = this.props.quotes.length - 1;
      const random = Math.floor(Math.random() * (max - 0 + 1)) + 0;

      return (
        <div className="container">
          <div className="column1"></div>
          <Card className="boxquoute" id="quote-box">
            <div className="message">
              <i className="quote left icon"></i>
              <Message id="text" message={listItems[random].key} />
              <i className="quote right icon"></i>
            </div>
            <div className="main"></div>
            <div className="author">
              <Author id="author" author={listItems[random].props.author} />
            </div>
            <div className="buttonsshare">
             
              <div className="buttondivision">
                <div className="bc3"></div>
                <ButtonShare className="bmessage">
                  <div className="button button--share">
                    <span>
                      <div className="bmessage">
                        <div className="b-icon">
                          <i className="copy icon"></i>
                        </div>
                        <div className="b-name">
                          <p>Copy</p>
                        </div>
                      </div>
                    </span>
                  </div>
                </ButtonShare>
                <div className="bc4"></div>
              </div>
            
              <div className="buttondivision">
                <div className="bc3"></div>
                <ButtonShare className="bmessage">
                  <div className="button button--share">
                    <span>
                      <div className="bmessage">
                        <div className="b-icon">
                          <i className="telegram plane icon"></i>
                        </div>
                        <div className="b-name">
                          <p>Telegram</p>
                        </div>
                      </div>
                    </span>
                  </div>
                </ButtonShare>
                <div className="bc4"></div>
              </div>

              <div className="buttondivision" >
                <div className="bc3"></div>
                <ButtonShare 
                className="bmessage" 
                sharingFacebook={this.sharingFacebook}
                id="fb-share-button"
                >
                  <div className="button button--share" >
                    <span>
                      <div className="bmessage">
                        <div className="b-icon">
                          <i className="facebook icon"></i>
                        </div>
                        <div className="b-name">
                          <p>Facebook</p>
                        </div>
                      </div>
                    </span>
                  </div>
                </ButtonShare>
                <div className="bc4"></div>
              </div>

              <div className="buttondivision">
                <div className="bc3"></div>
                <ButtonShare className="bmessage">
                  <div className="button button--share">
                    <span>
                      <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                      <div className="bmessage">
                        <div className="b-icon">
                          <i className="twitter icon"></i>
                        </div>
                        <div className="b-name">
                          <p>Twitter</p>
                        </div>
                      </div>
                      </a>
                    </span>
                  </div>
                </ButtonShare>
                <div className="bc4"></div>
              </div>

              <div className="buttondivision">
                <div className="bc3"></div>
                <ButtonShare className="bmessage">
                  <div className="button button--share">
                    <span>
                    <a href="https://github.com/Rockstar4400/Freecodecamp-Projects/tree/main/01.Front%20End%20Development/01.random_quote_machine">
                      <div className="bmessage">
                        <div className="b-icon">
                          <i className="github square icon"></i>
                        </div>
                        <div className="b-name">
                          <p>Github</p>
                        </div>
                      </div>
                      </a>
                    </span>
                  </div>
                </ButtonShare>
                <div className="bc4"></div>
              </div>

            </div>

            <div id="new-quote"></div>
          </Card>
          <div className="column2"></div>
          <div className="butttonleft">
            <div className="bleft1"></div>
            <div className="butleft">
              <Button
                passclass="button button--antheleft"
                clickHandler={this.clickHandler}
              >
                <span>
                  <i className="angle left icon big"></i>
                </span>
              </Button>
            </div>
            <div className="bleft2"></div>
          </div>
          <div className="imagesvg">
            <div className="svgside1"></div>
            <Card className="svgside2">
              <Image passclass="image" house={listItems[random].props.house} />
            </Card>
            <div className="svgside3"></div>
          </div>
          <div className="buttonright">
            <div className="bright1"></div>
            <div className="butright">
              <Button
                passclass="button button--antheright"
                quotes={this.props.quotes}
                clickHandler={this.clickHandler}
              >
                <span>
                  <i className="angle right icon big"></i>
                </span>
              </Button>
            </div>
            <div className="bright2"></div>
          </div>
          <div className="column3"></div>
          <div className="imagesvg"></div>
          <div className="column4"></div>
          <div className="column5"></div>
          <div className="logo">
            <h4>Made with:</h4>
            <Logo className="react" />
          </div>
          <div className="column6"></div>
        </div>
      );
    }
  }
}

export default Container;
