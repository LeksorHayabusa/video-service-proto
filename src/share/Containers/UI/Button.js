import React from 'react';
import PropTypes from 'prop-types';
import { requiredIf } from '../../../tests/util';
const Button = ({
	children,
	styles,
	disabled = false,
	clickButtonAction
}) => (
		<button
			className={`${styles} button`}
			disabled={disabled}
			onClick={clickButtonAction}
		>
			{children}
		</button>
	)

Button.propTypes = {
	children: PropTypes.string.isRequired,
	styles: PropTypes.string.isRequired,
	disabled: requiredIf(PropTypes.bool, ({disabled}) => disabled !== undefined),
	clickButtonAction: requiredIf(PropTypes.func, ({disabled}) => disabled !== undefined)
}

export default Button;