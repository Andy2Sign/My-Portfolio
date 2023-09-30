import React from 'react'

const ThemeBtn = ({switchTheme}) => {
	return (
		<div>
			<button onClick={switchTheme}>
				Switch
			</button>
		</div>
	)
}

export default ThemeBtn
