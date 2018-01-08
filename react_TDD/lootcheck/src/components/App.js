import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
      super(props);
       this.state = {appState: ''};
  }
  //define render method
  render() {
      return (
          <div>
              <h2>Loot Check</h2>
          </div>
      )
  }
}

export default App;
