import React from 'react';
import { shallow } from 'enzyme';

import { PreviewList as TestingComponent } from '../../src/share/Containers/VS/PreviewList';
import PreviewThumb from '../../src/share/Containers/VS/PreviewThumb';
import { initialState as initialVSContent } from '../../src/store/reducers/VSreducer';
import { initialState as initialServiceState } from '../../src/store/reducers/AppServiceReducer';

describe('<PreviewList/>', () => {
	const previewList = initialVSContent.previewList;
	const listLength = previewList.length;
	const dragWrapperState = initialServiceState.dragWrapper;

	previewList.length > 0 && it('should contain the preview thumbs initial number', () => {
		const wrapper = shallow(<TestingComponent
			previewList={previewList}
			isWrapperMounted={dragWrapperState.isMounted}
		/>);
		expect(wrapper.find(PreviewThumb).length).toEqual(12);
	})
})