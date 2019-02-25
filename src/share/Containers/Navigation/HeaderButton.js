import React from 'react';

/* import '../../../assets/styles/button.scss'; */
export default ({
	id,
	name,
	path,
	style,
	disabled,
	a_pressed
}) => (
		<button
			className={`header-button ${style}`}
			disabled={disabled}
			aria-pressed={a_pressed}
			onClick={() => this.props.history.push({ pathname: `/${path}/` })
			}
		>
			{name}
		</button>
	)