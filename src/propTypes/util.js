// helps conditionally check with propTypes.
//the 'type' need to provide propTypes check func.
// the condition is a func to check props.specialChild 
//under a certain condition
export const requiredIf = (type, condition) =>
	function (props, propName, componentName) {
		if (typeof type !== "function") {
			return new Error(
				'Invalid react-required-if prop type supplied to ' + componentName + '. Validation failed.'
			);
		}

		if (typeof condition !== "function") {
			return new Error(
				'Invalid react-required-if condition supplied to ' + componentName + '. Validation failed.'
			);
		}

		const test = condition(props) ? type.isRequired : type;
		return test.apply(this, arguments);
	}


