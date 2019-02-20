import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PreviewThumb from './PreviewThumb';
import DraggableWrapper from '../../Components/VS/DraggableWrapper';

export const PreviewList = ({ previewList }) => (
	<div className='PreviewList'>
		<DraggableWrapper/>
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