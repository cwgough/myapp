import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Playlists from "./components/playlists.component";
import CreatePlaylist from "./components/createplaylist.component";

function App() {
  return (
    <Router>
      {/* <Navbar />
      <br /> */}
      <Route path="/" exact component={Home} />
      <Route path="/playlists" exact component={Playlists} />
      <Route path="/createplaylist" exact component={CreatePlaylist} />
    </Router>
  );
}

export default App;
