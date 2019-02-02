import React, { Component, Fragment } from 'react';

import Header from '../share/Containers/Navigation/Header'

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