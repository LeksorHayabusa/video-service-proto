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
			youtubeID: 'Nh10gL_GP_w'
		} ,
		{
			id: 'a2',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a3',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a4',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a5',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a6',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a7',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a8',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a9',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a10',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a11',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a12',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
	]
}

export default ( state = initialState, { type, payload } ) => {
	switch (type) {
		default: return state;
	}
}