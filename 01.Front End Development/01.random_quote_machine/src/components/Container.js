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

  sharingFacebook() {
    var fbButton = document.getElementById("fb-share-button");
    var url = window.location.href;

    fbButton.addEventListener("click", function () {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "_self"
      );
      return false;
    });
  }

  sharingTelegram() {
    var tgButton = document.getElementById("tg-share-button");

    tgButton.addEventListener("click", function () {
      const quoute = document.getElementById("text").innerHTML;
      const author = document.getElementById("author").innerHTML;
      window.open("https://t.me/share/url?url=" + quoute + author,"_self");
      return false;
    });
  }

  sharingTwitter() {
    var twButton = document.getElementById("tw-share-button");
    document.getElementById("tweet-quote").removeAttribute("href");

    twButton.addEventListener("click", function () {
      const quoute = document.getElementById("text").innerHTML;
      const author = document.getElementById("author").innerHTML;
      window.open(
        "http://twitter.com/share?text=" +
          quoute +
          author +
          "&hashtags=GameOfThrones","_self"
      );
      return false;
    });
  }

  copyButton() {
    const quoute = document.getElementById("text").innerHTML;
    const author = document.getElementById("author").innerHTML;

    navigator.clipboard.writeText(quoute + author).then(
      function () {
        alert("Copied successfully!");
      },
      function (err) {
        console.error(err);
      }
    );

    const btn = document.getElementById("btn-copy");
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  sharingGithub() {
    var ghButton = document.getElementById("gh-share-button");
    ghButton.addEventListener("click", function () {
      window.open(
        "https://github.com/Rockstar4400/Freecodecamp-Projects/tree/main/01.Front%20End%20Development/01.random_quote_machine",
        "_self"
      );
      return false;
    });
  }

  render() {
    const quotes = this.props.quotes;

    if (quotes == null) {
      return <ContainerNoData />;
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
            <div className="buttonsshare ">
              <div
                className="buttondivision buttondivision--share"
                onClick={this.copyButton}
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon" id="btn-copy">
                      <i id="copy-logo">
                        <svg viewBox="0 0 64 64" fill="white" width="35">
                          <g>
                            <path
                              d="M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1
                                  c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197
                                  c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177
                                  c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677
                                  c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z
                                  M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845
                                  c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4
                                  v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z
                                  M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249
                                  c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637
                                  c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053
                                  c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399
                                  v21.616C49.524,43.26,47.429,45.355,44.855,45.355z"
                            />
                          </g>
                        </svg>
                      </i>
                      <i id="done-logo">
                        <svg
                          viewBox="0 0 32 32"
                          fill="white"
                          width="30"
                          id="done"
                        >
                          <g>
                            <path d="M12.16,28a3,3,0,0,1-2.35-1.13L3.22,18.62a1,1,0,0,1,1.56-1.24l6.59,8.24A1,1,0,0,0,13,25.56L27.17,4.44a1,1,0,1,1,1.66,1.12L14.67,26.67A3,3,0,0,1,12.29,28Z" />
                          </g>
                        </svg>
                      </i>
                    </div>
                    <div className="b-name">
                      <p>Copy</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                onClick={this.sharingTelegram}
                id="tg-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <i className="telegram plane icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Telegram</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                onClick={this.sharingFacebook}
                id="fb-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <i className="facebook icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Facebook</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                onClick={this.sharingTwitter}
                id="tw-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <a
                        id="tweet-quote"
                        href="https://twitter.com/intent/tweet"
                      ></a>
                      <i className="twitter icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Twitter</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
              </div>

              <div
                className="buttondivision buttondivision--share"
                onClick={this.sharingGithub}
                id="gh-share-button"
              >
                <div className="buttonEffect">
                  <div className="bc3"></div>
                  <ButtonShare className="bmessage">
                    <div className="b-icon">
                      <i className="github square icon"></i>
                    </div>
                    <div className="b-name">
                      <p>Github</p>
                    </div>
                  </ButtonShare>
                  <div className="bc4"></div>
                </div>
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
