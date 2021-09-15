import './App.css';
import Home from './Components/Home/Home';
import NoMatch from "./Components/No match/NoMatch";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact  path='/'>
            <Home />
          </Route>

          <Route path="*">
                 <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
