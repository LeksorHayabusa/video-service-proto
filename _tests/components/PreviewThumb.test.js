import React from 'react';
import { shallow } from 'enzyme';

import { PreviewThumb as TestingComponent } from '../../src/share/Containers/VS/PreviewThumb';
import * as VScontent from '../../src/store/reducers/VSreducer';
import * as UIsettings from '../../src/store/reducers/UIreducer';

describe('<PreviewThumb/>', () => {
	let wrapper;
	beforeEach(() => wrapper = shallow(<TestingComponent
		previewList={VScontent.initialState.previewList}
		i={1}
		buttonStyles={UIsettings.initialState.global.buttons}
	/>));

	it('should contain 1 Cancel button', () => {
		expect(wrapper.find('Button').at(0).dive().find('.cancel').length).toEqual(1);
	})

	it('should contain 1 Add button', () => {
		expect(wrapper.find('Button').at(1).dive().find('.add').length).toEqual(1);
	})
})