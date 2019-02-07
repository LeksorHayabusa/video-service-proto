import React, { Component } from 'react';

import AppLayout from '../hoc/App-layout';
import VS from '../share/Containers/VS/VS'
import Modal from '../share/Components/UI/Modal';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Modal/>
        <AppLayout>
          <VS/>
        </AppLayout>
      </div>
    );
  }
}

export default App
