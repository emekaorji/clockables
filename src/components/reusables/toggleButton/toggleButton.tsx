import React, { useState } from 'react';
import getClassName from '../../../functions/getClassName';
import styles from './toggleButton.module.css';

const ToggleButton = ({
	color = '#27AE60',
	value = false,
	onChange,
	className,
	style,
	...props
}: {
	color?: string;
	value: boolean;
	onChange: (event: { target: { value: boolean } }) => void;
	className?: string;
	style?: React.CSSProperties;
}) => {
	const [on, setOn] = useState(value);
	const handleClick = () => {
		setOn(!on);
		onChange({ target: { value: !on } });
	};

	return (
		<>
			<button
				className={
					styles.toggle + getClassName(on, styles.on) + getClassName(className)
				}
				style={{ '--color': color, ...style } as React.CSSProperties}
				onClick={handleClick}
				{...props}>
				<div></div>
			</button>
		</>
	);
};

export default ToggleButton;
