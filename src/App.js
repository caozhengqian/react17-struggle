import One from './view/One/One'
import Two from './view/Two/Two'
import  Index from './view/Index/Index'
import Life from './view/life/Life'
import SimpleLife from './view/life/SimpleLife/SimpleLife'
import DataLifeNotToSon from './view/life/DataLifeNotToSon/DataLifeNotToSon'
import DataLifeToSon from './view/life/DataLifeToSon/DataLifeToSon'
import SonChangeFather from './view/life/SonChangeFather/SonChangeFather'
import RouterLife from './view/life/RouterLife/RouterLife'
import TestRouter from './view/life/RouterLife/TestRouter'
import TestRouterTimOut from './view/life/RouterLifeTimeOut/TestRouterTimeOut'
import RouterLifeTimeOut from './view/life/RouterLifeTimeOut/RouterLifeTimeOut'
import UnComLife from './view/life/UnComLife/UnComLife'
import UnComLifeTimeOut from './view/life/UnComLifeTimeOut/UnComLifeTimeOut'
import ForLife from './view/life/ForLife/ForLife'
import StopLife from './view/life/StopLife/StopLife'
import NoStopLife from './view/life/NoStopLife/NoStopLife'
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

              <Route exact path={`/life`} component={Life} />
              <Route exact path={`/simpleLife`} component={SimpleLife} />
              <Route exact path={`/dataLifeNotToSon`} component={DataLifeNotToSon} />
              <Route exact path={`/dataLifeToSon`} component={DataLifeToSon} />
              <Route exact path={`/sonChangeFather`} component={SonChangeFather} />
              <Route exact path={`/routerLife`} component={RouterLife} />
              <Route exact path={`/routerLife/TestRouter`} component={TestRouter} />
              <Route exact path={`/routerLife/TestRouterTimeOut`} component={TestRouterTimOut} />
              <Route exact path={`/routerLifeTimeOut`} component={RouterLifeTimeOut} />
              <Route exact path={`/unComLife`} component={UnComLife} />
              <Route exact path={`/unComLifeTimeOut`} component={UnComLifeTimeOut} />
              <Route exact path={`/forLife`} component={ForLife} />
              <Route exact path={`/stopLife`} component={StopLife} />
              <Route exact path={`/noStopLife`} component={NoStopLife} />
          </Switch>
      </Router>
  );
}

export default App;
