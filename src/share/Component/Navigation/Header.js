import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* import '../../../assets/styles/header.scss'; */
import Button from '../UI/Button';

const header = ({headerUI}) => {
	return (
		<nav
			className='Header'
			role='navigation'
			aria-label='header'>
			{headerUI && headerUI.map(rule =>
				<Fragment key={rule.id}>
					<Button {...rule} />
				</Fragment>
			)}
		</nav>
	)
}

const mapStateToProps = state => ({ headerUI: state.UIsettings.nav.header });
const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))