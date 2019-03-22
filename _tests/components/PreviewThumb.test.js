import React from 'react';
import { shallow } from 'enzyme';

import { PreviewThumb as TestingComponent } from '../../src/share/Containers/VS/PreviewThumb';
import { initialState } from '../../src/store/reducers/VSreducer';

describe('<PreviewThumb/>', () => {
	let wrapper;
	beforeEach(() => wrapper = shallow(<TestingComponent previewList={initialState} i={1}/>));

	it('should invoke getClickedIndexAction with index argument', () => {
		expect(wrapper.find('Button').length).toEqual(2);
	})
})