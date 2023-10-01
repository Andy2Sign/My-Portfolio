import React from 'react';
import "./ThemeBtn.css";

const ThemeBtn = ({switchTheme}) => {
	return (
		<div className='main-box'>
			<button onClick={switchTheme}>
				Switch
			</button>
		</div>
	)
}

export default ThemeBtn
