import React from 'react';
import Home from './Home';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.css';
import './scss/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
