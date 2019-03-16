import * as messages from './errorMessages';

export const keyframeNameCheck = (keyframes) => {
	if (keyframes === undefined) {
		throw new Error(messages.EXPECTED_DEFINED_KEYFRAME_NAME)
	}
}