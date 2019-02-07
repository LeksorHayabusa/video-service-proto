import React from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../../../store/actions/index'
import Button from '../UI/Button';

// testing content pass value
const content = {
	header: 'helllo heading',
	body: 'here is some body',

}

const PreviewThumb = ({
	previewList,
	i,
	cancelBtn,
	addBtn,
	openModal }) => (
		<div className='PreviewThumb'>
			<div onClick={() => { openModal(content) }}>
				<h6>{previewList[i].title}</h6>
				<img src={previewList[i].thumbUrl} alt={previewList[i].title} />
			</div>
			<div className="footer">
				<button btntype={cancelBtn}>Cancel</button>
				<button btntype={addBtn}>Add to card</button>
			</div>
		</div>
	)

const mapStateToProps = state => ({
	previewList: state.VScontent.previewList,
	cancelBtn: state.UIsettings.cancelBtn,
	addBtn: state.UIsettings.addBtn
});
const mapDispatchToProps = dispatch => ({
	openModal: (content) => dispatch(actionCreator.openModal(content))
})
export default connect(mapStateToProps, mapDispatchToProps)(PreviewThumb)