import React from 'react';

export default ({
	children,
	styles,
	disabled = false,
	closeModalAction
}) => (
		<button
			className={`${styles} button`}
			disabled={disabled}
			onClick={closeModalAction}
		>
			{children}
		</button>
	)