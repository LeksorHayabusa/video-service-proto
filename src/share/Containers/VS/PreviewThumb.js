import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index'

export const PreviewThumb = ({
	previewList,
	i,
	buttonStyles,
	getClickedIndexAction,
	openDragWrapperAction
}) => (
		<div className='PreviewThumb' >
			<h6 className='title'>{previewList[i].title}</h6>
			<img
				src={`https://img.youtube.com/vi/${previewList[i].youtubeID}/0.jpg`}
				alt={previewList[i].title}
				onClick={() => {
					getClickedIndexAction(i);
					openDragWrapperAction()
				}}
			/>
			<div className="footer">
				<Button styles={buttonStyles.cancel.styles}>Not interesting</Button>
				<Button styles={buttonStyles.add.styles}>Add to card</Button>
			</div>
		</div>
	)

PreviewThumb.propTypes = {
	previewList: PropTypes.array,
	i: PropTypes.number,
	cancelBtn: PropTypes.string
}

const mapStateToProps = state => ({
	isMounted: state.AppServiceState.APARAM,
	previewList: state.VScontent.previewList,
	buttonStyles: state.UIsettings.global.buttons
});
const mapDispatchToProps = dispatch => ({
	openDragWrapperAction: (content) => dispatch(actionCreator.mountDragWrapper(content))
})
export default connect(mapStateToProps, mapDispatchToProps)(PreviewThumb)