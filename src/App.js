import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Vids from "./components/Vids";
import Gigs from "./components/Gigs";
import Listen from "./components/Listen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Listen" component={Listen} />
        <Route exact path="/Vids" component={Vids} />
        <Route exact path="/Gigs" component={Gigs} />
      </Switch>
    </Router>
  );
}

export default App;
