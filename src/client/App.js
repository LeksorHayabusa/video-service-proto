import React, { Component } from 'react';

import AppLayout from '../hoc/App-layout';
import VS from '../share/Containers/VS/VS'

class App extends Component {

  render() {
    return (
      <div className='App'>

        <AppLayout>
          <VS/>
        </AppLayout>
      </div>
    );
  }
}

export default App
