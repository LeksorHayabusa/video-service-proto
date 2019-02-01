import React, { Component, Fragment } from 'react';

import Header from '../share/Component/Navigation/Header'
/* import '../assets/styles/app.scss'; */

class AppLayout extends Component {
	render() {
		return (
			<Fragment>
				<div className='App-layout'>
					<Header />
					{this.props.children}
				</div>

			</Fragment>
		)
	}
}

export default AppLayout