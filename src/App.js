import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import "./reset.css";

import Characters from "./containers/Characters";
import Character from "./containers/Character";
import Comics from "./containers/Comics";
import Header from "./components/Header";
import Favorites from "./containers/Favorites";
import "./App.css";

const App = () => {
  // init states managing favorites
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    const strFavoriteComics = JSON.stringify(favoriteComics);
    Cookies.set("favoriteComics", strFavoriteComics);
  }, [favoriteComics]);

  useEffect(() => {
    const strFavoriteCharacters = JSON.stringify(favoriteCharacters);
    Cookies.set("favoriteCharacters", strFavoriteCharacters);
  }, [favoriteCharacters]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/favorites">
          <Favorites
            setFavoriteCharacters={setFavoriteCharacters}
            favoriteCharacters={favoriteCharacters}
            setFavoriteComics={setFavoriteComics}
            favoriteComics={favoriteComics}
          />
        </Route>
        <Route path="/characters">
          <Characters
            setFavoriteCharacters={setFavoriteCharacters}
            favoriteCharacters={favoriteCharacters}
          />
        </Route>
        <Route path="/comics/">
          <Comics
            setFavoriteComics={setFavoriteComics}
            favoriteComics={favoriteComics}
          />
        </Route>
        <Route path="/character/:id">
          <Character
            setFavoriteComics={setFavoriteComics}
            favoriteComics={favoriteComics}
          />
        </Route>
        <Route path="/">
          <Characters
            setFavoriteCharacters={setFavoriteCharacters}
            favoriteCharacters={favoriteCharacters}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
