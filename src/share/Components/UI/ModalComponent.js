import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

class ModalComponent extends Component {
	render() {
		return (
			<div>
				<Button variant="contained">
        Default
      </Button>
			</div>
		)
	}
}

export default withStyles(null)(ModalComponent)