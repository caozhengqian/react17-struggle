import One from './view/One/One'
import Two from './view/Two/Two'
import  Index from './view/Index/Index'
import './App.less';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={`/one`} component={One} />
              <Route exact path={`/`} component={Index} />
              <Route exact path={`/two`} component={Two} />
          </Switch>
      </Router>
  );
}

export default App;
