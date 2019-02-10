import React from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../../../store/actions/index';

const Backdrop = ({
	parent, 
	isOpened, 
	closeHandler
}) => (
	<div 
	data-shown={isOpened}
	className="backdrop" 
	onClick={() => closeHandler(parent)}
	/>
)

const mapStateToProps = state => ({isOpened: state.AppServState.backdrop.isOpened})

const mapDispatchToProps = dispatch => ({
 	closeHandler: (parent) => dispatch(actionCreator.closeBackdrop(parent))
})

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop)