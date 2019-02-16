import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import store from '../store/store';
import { PreviewList } from '../share/Containers/VS/PreviewList';
import PreviewThumb from '../share/Containers/VS/PreviewThumb';

configure({ adapter: new Adapter() });

describe('<PreviewList/>', () => {
	beforeEach(e => {
		let wrapper = shallow(
			<Provider store={store}>
				<PreviewList />
			</Provider>);
		it('should render <PreviewThumb/> for every preview ', () => {
			expect(wrapper.find(PreviewThumb)).toMatchSnapshot();
		});
	})
})