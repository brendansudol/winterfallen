import Tippy from "@tippy.js/react";
import React, { Component } from "react";

const CHARACTERS = [
  { id: "Arya", name: "Arya", hashtag: "#AryaStark" },
  { id: "BranStark", name: "Bran", hashtag: "#BranStark" },
  { id: "Brienne", name: "Brienne", hashtag: "#BrienneOfTarth" },
  { id: "Cersei", name: "Cersei", hashtag: "#CerseiLannister" },
  { id: "Daenery", name: "Daenerys", hashtag: "#DaenerysTargaryen" },
  { id: "Davos", name: "Davos", hashtag: "#DavosSeaworth" },
  { id: "Euron", name: "Euron", hashtag: "#EuronGreyjoy" },
  { id: "Greyworm", name: "Greyworm", hashtag: "#Greyworm" },
  { id: "JaimeLannister", name: "Jaime", hashtag: "#JaimeLannister" },
  { id: "JohnSnow", name: "Jon Snow", hashtag: "#JonSnow" },
  { id: "Jorah", name: "Jorah", hashtag: "#JorahMormont" },
  { id: "Missandei", name: "Missandei", hashtag: "#Missandei" },
  { id: "NightKing", name: "Night King", hashtag: "#NightKing" },
  { id: "RedWoman", name: "Melisandre", hashtag: "#Melisandre" },
  { id: "SamTarly", name: "Sam", hashtag: "#SamwellTarly" },
  { id: "Sansa", name: "Sansa", hashtag: "#SansaStark" },
  { id: "TheHound", name: "The Hound", hashtag: "#TheHound" },
  { id: "Theon", name: "Theon", hashtag: "#TheonGreyjoy" },
  { id: "TyrionLannister", name: "Tyrion", hashtag: "#TyrionLannister" },
  { id: "Varys", name: "Varys", hashtag: "#Varys" }
];

const enc = txt => encodeURIComponent(txt);

const imgUrl = characterId => `${process.env.PUBLIC_URL}/img/characters/${characterId}.png`;

const urlParams = characters => `predictions=${characters.map(c => +c.willDie).join("")}`;

const composeTweet = characters => {
  const url = `${window.location.origin}/#${urlParams(characters)}`;

  const fallen = characters.filter(c => c.willDie);
  const n = fallen.length;
  const hashtags = fallen.map(c => c.hashtag).join(", ");
  const msg = `I think ${n} main character${
    n === 1 ? " is" : "s are"
  } going to die in the next GoT episode (Battle of Winterfell)... ${hashtags}`;

  return `https://twitter.com/intent/tweet?text=${enc(msg)}&url=${enc(url)}`;
};

class App extends Component {
  constructor(props) {
    super(props);

    const { initialPredictions } = props;
    const characters = CHARACTERS.map((entry, i) => ({
      ...entry,
      willDie: !!+initialPredictions[i]
    }));

    this.state = { characters };
  }

  handleButtonClick = id => () => {
    this.setState(
      prev => ({
        characters: prev.characters.map(char =>
          char.id === id ? { ...char, willDie: !char.willDie } : char
        )
      }),
      this.updateUrl
    );
  };

  updateUrl = () => {
    window.location.hash = urlParams(this.state.characters);
  };

  render() {
    const { characters } = this.state;
    const fallen = characters.filter(c => c.willDie);

    return (
      <div className="p2 mx-auto container app">
        <header className="mb2">
          <a className="text-decoration-none" href="/">
            <h1 className="m0 sm-h0 serif">The Winterfallen</h1>
          </a>
          <p className="m0 line-height-3">
            Predict and share who you think will die in the <em>Battle of Winterfell</em>.
          </p>
        </header>
        <div className="flex flex-wrap mxn1 mb2  pt1">
          {characters.map(({ id, name, willDie }) => (
            <div key={id} className="col-6 sm-col-4 px1 mb2">
              <button
                className={`btn btn-character p1 h6 caps col-12 ${
                  willDie ? "btn-danger" : "btn-success"
                }`}
                onClick={this.handleButtonClick(id)}
                style={{ height: 48 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      key={id}
                      className="mr05"
                      src={imgUrl(id)}
                      alt={name}
                      width={30}
                      height={30}
                    />
                    <span className="truncate">{name}</span>
                  </div>
                  <span className="h2">{willDie ? "😵" : "🙂"}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="p2 rounded results">
          <div>
            I think <strong>{fallen.length}</strong> main{" "}
            {fallen.length === 1 ? "character is" : "characters are"} going to die in the next GoT
            episode...
          </div>
          {fallen.length > 0 && (
            <div className="mt1 flex flex-wrap">
              {fallen.map(({ id, name }, i) => (
                <span key={id} className="mr05 flex">
                  <span className="flex-inline items-center">
                    <img className="mr01" src={imgUrl(id)} alt="" width={18} height={18} />
                    <span>{name}</span>
                  </span>
                  {i + 1 < fallen.length && <span>,</span>}
                </span>
              ))}
            </div>
          )}
          <div className="mt1">
            <Tippy
              content="The GoT character emojis will show up in your tweet once it's published to Twitter!"
              className="tooltip"
              arrow={true}
            >
              <a
                className="bold h6"
                rel="noopener noreferrer"
                target="_blank"
                href={composeTweet(characters)}
              >
                Share on Twitter
              </a>
            </Tippy>
          </div>
        </div>
        <footer className="mt3 mb2 h6">
          <a href="/">The Winterfallen</a> • Made by{" "}
          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/brensudol">
            @brensudol
          </a>{" "}
          <span className="xs-hide">• I hope you're having a lovely day</span>
        </footer>
      </div>
    );
  }
}

export default App;
