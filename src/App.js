import One from './view/One/One'
import Two from './view/Two/Two'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={`/`} component={One} />
              <Route exact path={`/two`} component={Two} />
          </Switch>
      </Router>
  );
}

export default App;
