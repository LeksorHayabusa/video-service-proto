import * as actionTypes from '../actions/actionTypes';
import { } from '../actions/index';

const initialState = {
	inPlay: {
		id: '',
		name: '',
		url: '',
		thumb: ''
	},
	previewList: [
		{
			id: 'a1',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		} ,
		{
			id: 'a2',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a3',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a4',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a5',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a6',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a7',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a8',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a9',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a10',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a11',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
		{
			id: 'a12',
			title: 'flaimes',
			thumbUrl: 'https://img.youtube.com/vi/Nh10gL_GP_w/0.jpg'
		},
	]
}

export default ( state = initialState, { type, payload } ) => {
	switch (type) {
		default: return state;
	}
}