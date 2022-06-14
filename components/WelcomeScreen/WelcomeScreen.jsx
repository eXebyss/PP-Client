//Welcome bar
import React from 'react'
import classes from './welcomeScreen.module.scss'

function WelcomeScreen() {
	return (
		<div className={classes.welcomeScreen}>
			<h1 id='firstLine' className={classes.firstLine}>
				Welcome
			</h1>
			<h2 id='secondLine' className={classes.secondLine}>
				To My Portfolio Page!
			</h2>
		</div>
	)
}

export default WelcomeScreen
