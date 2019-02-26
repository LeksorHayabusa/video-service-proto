import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PreviewThumb from './PreviewThumb';
import DraggableWrapper from '../../../hoc/DraggableWrapper';
import EmbeddedPlayer from './EmbeddedPlayer';

class PreviewList extends Component {
	state = {
		clickedItem: null,
	}

	getClickedComponentAction = i => this.setState({ clickedItem: i });

	render() {
		const { previewList, isWrapperMounted } = this.props;
		const { clickedItem } = this.state;
		return (
			<div className='PreviewList'>
				{isWrapperMounted && <DraggableWrapper title={previewList[clickedItem].title}>
					<EmbeddedPlayer
						youtubeID={previewList[clickedItem].youtubeID}
					/>
				</DraggableWrapper>}
				{previewList && previewList.map((el, i) => (
					<Fragment key={el.id}>
						<PreviewThumb i={i} getClickedIndexAction={this.getClickedComponentAction} />
					</Fragment>)
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isWrapperMounted: state.AppServiceState.dragWrapper.isMounted,
	previewList: state.VScontent.previewList
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewList))