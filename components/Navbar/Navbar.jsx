import classes from './navbar.module.scss'

function Navbar() {
	const changeTheme = themeValue => {
		document.documentElement.setAttribute('data-theme', themeValue)
	}

	return (
		<>
			<nav className={classes.mobile}>
				<label htmlFor='menu-modal' className='btn modal-button'>
					<i className='fa-solid fa-bars'></i>
				</label>

				<select
					className='select select-primary mx-auto text-sm'
					onChange={e => changeTheme(e.target.value)}
					value='default'>
					<option value='default' disabled>
						Choose style theme
					</option>
					<option value='light'>🌞 Light</option>
					<option value='lofi'>🌞 Lofi</option>
					<option value='night'>🌚 Night</option>
					<option value='cyberpunk'>🤖 Cyberpunk</option>
					<option value='luxury'>🌜 Luxury</option>
				</select>

				<input type='checkbox' id='menu-modal' className='modal-toggle' />
				<label
					htmlFor='menu-modal'
					className='modal cursor-pointer modal-bottom sm:modal-middle'>
					<label className='modal-box relative' htmlFor=''>
						<label
							htmlFor='menu-modal'
							className='btn btn-sm btn-circle absolute right-2 top-2'>
							✕
						</label>
						<ul className='text-center'>
							<li>
								<a className={classes.navLink} href='#aboutMe'>
									.me<span className={classes.navSpan}>( )</span>
								</a>
							</li>
							<li>
								<a className={classes.navLink} href='#skills'>
									.skills<span className={classes.navSpan}>( )</span>
								</a>
							</li>
							<li>
								<a className={classes.navLink} href='#experience'>
									.experience<span className={classes.navSpan}>( )</span>
								</a>
							</li>
							<li>
								<a className={classes.navLink} href='#projects'>
									.projects<span className={classes.navSpan}>( )</span>
								</a>
							</li>
							<li>
								<a className={classes.navLink} href='#contact'>
									.contact<span className={classes.navSpan}>( )</span>
								</a>
							</li>
						</ul>
					</label>
				</label>
			</nav>

			<nav className={classes.desktop}>
				<a className={classes.navLink} href='#aboutMe'>
					.me<span className={classes.navSpan}>( )</span>
				</a>
				<a className={classes.navLink} href='#skills'>
					.skills<span className={classes.navSpan}>( )</span>
				</a>
				<a className={classes.navLink} href='#experience'>
					.experience<span className={classes.navSpan}>( )</span>
				</a>
				<a className={classes.navLink} href='#projects'>
					.projects<span className={classes.navSpan}>( )</span>
				</a>
				<a className={classes.navLink} href='#contact'>
					.contact<span className={classes.navSpan}>( )</span>
				</a>
				<select
					className='select select-primary w-full max-w-xs'
					onChange={e => changeTheme(e.target.value)}
					value='default'>
					<option value='default' disabled>
						Choose style theme
					</option>
					<option value='light'>🌞 Light</option>
					<option value='lofi'>🌞 Lofi</option>
					<option value='night'>🌚 Night</option>
					<option value='cyberpunk'>🤖 Cyberpunk</option>
					<option value='luxury'>🌜 Luxury</option>
				</select>
			</nav>
		</>
	)
}

export default Navbar
