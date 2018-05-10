import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Main from './components/Main'
import Menu from './components/Menu'
import WebcamParent from './components/WebcamParent'
import CheckPhoto from './components/CheckPhoto'
import Plp from './components/Plp'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/webcam" component={WebcamParent}/>
          <Route exact path="/checkphoto" component={CheckPhoto}/>
          <Route exact path="/plp" component={Plp}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/" component={Main}/>
          <Route component={Main}/>
        </Switch>
      </div>
    )
  }
}

export default App
