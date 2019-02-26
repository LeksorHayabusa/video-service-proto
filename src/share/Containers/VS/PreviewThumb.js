import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index'
import animationTypes from '../../../assets/styles/styles.scss';

class PreviewThumb extends Component {
	state = { 
		isChanging: true
	}

	previewChangeAction = (isChanging) => this.setState({ isChanging });
	
	componentWillReceiveProps = (nextProps) => {
		const nextItem = nextProps.previewList[nextProps.i];
		const prevItem = this.props.previewList[this.props.i];
		if (nextItem != prevItem) {
			this.previewChangeAction(true);
		}
	}

	render() {
		const {
			previewList,
			i,
			cancelBtn,
			addBtn,
			getClickedIndexAction,
			openDragWrapperAction
		} = this.props;
		const { isChanging }= this.state;
		return (
			<div className='PreviewThumb' >
				<h6 className='title'>{previewList[i].title}</h6>
				<img
					className={isChanging ? 'changing' : null}
					src={`https://img.youtube.com/vi/${previewList[i].youtubeID}/0.jpg`}
					alt={previewList[i].title}
					onClick={() => {
						getClickedIndexAction(i);
						openDragWrapperAction()
					}}
					onAnimationEnd={
						({ animationName }) => {
							animationName === animationTypes.flashEffect && this.previewChangeAction(false)
						}}
				/>
				<div className="footer">
					<Button btntype={cancelBtn}>Not interesting</Button>
					<Button btntype={addBtn}>Add to card</Button>
				</div>
			</div>
		)
	}
}

// const PropTypes = {
// 	PreviewThumb
// }

const mapStateToProps = state => ({
	isMounted: state.AppServiceState.APARAM,
	previewList: state.VScontent.previewList,
	cancelBtn: state.UIsettings.cancelBtn,
	addBtn: state.UIsettings.addBtn
});
const mapDispatchToProps = dispatch => ({
	openDragWrapperAction: (content) => dispatch(actionCreator.mountDragWrapper(content))
})
export default connect(mapStateToProps, mapDispatchToProps)(PreviewThumb)