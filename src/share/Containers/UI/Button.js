import React from 'react';

export default ({
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