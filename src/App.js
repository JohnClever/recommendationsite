import React from 'react';
import './App.css';
import './components/First-page'
import Firstpage from './components/First-page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Secondpage from './components/Second-page';
import Thirdpage from './components/Third-page';
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Firstpage} />
            <Route exact path="/second-page" component={Secondpage} />
            <Route exact path="/third-page" component={Thirdpage} />
        </Switch>
    </Router>
  );
}

export default App;
