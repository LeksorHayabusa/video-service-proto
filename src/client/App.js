import React, { Component } from 'react';

/* import '../assets/styles/app.scss'; */
import AppLayout from '../hoc/App-layout';
import VS from '../share/Container/VS/VS'

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
