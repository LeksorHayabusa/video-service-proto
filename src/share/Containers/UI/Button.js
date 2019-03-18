import React from 'react';
import PropTypes from 'prop-types';
import { requiredIf } from '../../../propTypes/util';
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
	children: requiredIf(PropTypes.string, ({ children }) => children !== undefined),
	styles: requiredIf(PropTypes.string, ({ styles }) => styles !== undefined),
	disabled: requiredIf(PropTypes.bool, ({ disabled }) => disabled !== undefined),
	clickButtonAction: requiredIf(PropTypes.func, ({ disabled }) => disabled !== undefined)
}

export default Button;