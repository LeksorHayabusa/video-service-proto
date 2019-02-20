import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PreviewThumb from './PreviewThumb';
import DraggablePlayer from '../../Components/VS/DraggablePlayer';

export const PreviewList = ({ previewList }) => (
	<div className='PreviewList'>
		<DraggablePlayer
			// {...this.state}
			onUpdatePosition={(x, y) => this.setState({ x: x, y: y })}
		/>
		{previewList && previewList.map((el, i) => (
			<Fragment key={i}>
				<PreviewThumb i={i} />
			</Fragment>)
		)}
	</div>
)

const mapStateToProps = state => ({ previewList: state.VScontent.previewList });
const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewList))