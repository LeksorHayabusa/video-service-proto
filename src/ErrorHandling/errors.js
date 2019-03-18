import * as messages from './errorMessages';

export const styleNameCheck = (name) => {
	if (name === undefined) {
		throw new Error(messages.EXPECTED_DEFINED_STYLE_NAME)
	}
}