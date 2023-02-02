import './App.css';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { Planets } from './components/Planets';
import { People } from './components/People/People';

function App() {
  return (
    <Router>
      <>
        <Switch>

          <Route
            exact path="/Home" >
            <Homepage />
          </Route>

          <Route
            exact
            path="/Planets">
            <Planets />
          </Route>

          <Route
            exact path="/People">
            <People />
          </Route>

        </Switch>
      </>
    </Router>
  );
}

export default App;

// lmao look at this shit.s

