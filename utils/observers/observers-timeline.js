//One Global Observer for Timeline Component. Every new const is copy-paste.
const observersForTimeline = () => {
	const observerHTML = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const html = entry.target.querySelector('#progress-bar-html')

			if (entry.isIntersecting) {
				html.classList.add('html__animation')
				return
			}

			html.classList.remove('html__animation')
		})
	})

	observerHTML.observe(document.querySelector('.html'))

	const observerCSS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const css = entry.target.querySelector('#progress-bar-css')

			if (entry.isIntersecting) {
				css.classList.add('css__animation')
				return
			}

			css.classList.remove('css__animation')
		})
	})

	observerCSS.observe(document.querySelector('.css'))

	const observerSCSS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const scss = entry.target.querySelector('#progress-bar-scss')

			if (entry.isIntersecting) {
				scss.classList.add('scss__animation')
				return
			}

			scss.classList.remove('scss__animation')
		})
	})

	observerSCSS.observe(document.querySelector('.scss'))

	const observerJS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const js = entry.target.querySelector('#progress-bar-js')

			if (entry.isIntersecting) {
				js.classList.add('js__animation')
				return
			}

			js.classList.remove('js__animation')
		})
	})

	observerJS.observe(document.querySelector('.js'))

	const observerGit = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const git = entry.target.querySelector('#progress-bar-git')

			if (entry.isIntersecting) {
				git.classList.add('git__animation')
				return
			}

			git.classList.remove('git__animation')
		})
	})

	observerGit.observe(document.querySelector('.git'))

	const observerNodeJS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const nodejs = entry.target.querySelector('#progress-bar-nodejs')

			if (entry.isIntersecting) {
				nodejs.classList.add('nodejs__animation')
				return
			}

			nodejs.classList.remove('nodejs__animation')
		})
	})

	observerNodeJS.observe(document.querySelector('.nodejs'))

	const observerDB = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const db = entry.target.querySelector('#progress-bar-db')

			if (entry.isIntersecting) {
				db.classList.add('db__animation')
				return
			}

			db.classList.remove('db__animation')
		})
	})

	observerDB.observe(document.querySelector('.db'))

	const observerReact = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const react = entry.target.querySelector('#progress-bar-react')

			if (entry.isIntersecting) {
				react.classList.add('react__animation')
				return
			}

			react.classList.remove('react__animation')
		})
	})

	observerReact.observe(document.querySelector('.react'))

	const observerRedux = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const redux = entry.target.querySelector('#progress-bar-redux')

			if (entry.isIntersecting) {
				redux.classList.add('redux__animation')
				return
			}

			redux.classList.remove('redux__animation')
		})
	})

	observerRedux.observe(document.querySelector('.redux'))

	const observerTailwind = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const tailwind = entry.target.querySelector('#progress-bar-tailwind')

			if (entry.isIntersecting) {
				tailwind.classList.add('tailwind__animation')
				return
			}

			tailwind.classList.remove('tailwind__animation')
		})
	})

	observerTailwind.observe(document.querySelector('.tailwind'))

	const observerWebpack = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const webpack = entry.target.querySelector('#progress-bar-webpack')

			if (entry.isIntersecting) {
				webpack.classList.add('webpack__animation')
				return
			}

			webpack.classList.remove('webpack__animation')
		})
	})

	observerWebpack.observe(document.querySelector('.webpack'))

	const observerBootstrap = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const bootstrap = entry.target.querySelector('#progress-bar-bootstrap')

			if (entry.isIntersecting) {
				bootstrap.classList.add('bootstrap__animation')
				return
			}

			bootstrap.classList.remove('bootstrap__animation')
		})
	})

	observerBootstrap.observe(document.querySelector('.bootstrap'))

	const observerPWA = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const pwa = entry.target.querySelector('#progress-bar-pwa')

			if (entry.isIntersecting) {
				pwa.classList.add('pwa__animation')
				return
			}

			pwa.classList.remove('pwa__animation')
		})
	})

	observerPWA.observe(document.querySelector('.pwa'))

	const observerTS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const ts = entry.target.querySelector('#progress-bar-ts')

			if (entry.isIntersecting) {
				ts.classList.add('ts__animation')
				return
			}

			ts.classList.remove('ts__animation')
		})
	})

	observerTS.observe(document.querySelector('.ts'))

	const observerGraphQL = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const graphql = entry.target.querySelector('#progress-bar-graphql')

			if (entry.isIntersecting) {
				graphql.classList.add('graphql__animation')
				return
			}

			graphql.classList.remove('graphql__animation')
		})
	})

	observerGraphQL.observe(document.querySelector('.graphql'))

	const observerApollo = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const apollo = entry.target.querySelector('#progress-bar-apollo')

			if (entry.isIntersecting) {
				apollo.classList.add('apollo__animation')
				return
			}

			apollo.classList.remove('apollo__animation')
		})
	})

	observerApollo.observe(document.querySelector('.apollo'))

	const observerNextJS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const nextjs = entry.target.querySelector('#progress-bar-nextjs')

			if (entry.isIntersecting) {
				nextjs.classList.add('nextjs__animation')
				return
			}

			nextjs.classList.remove('nextjs__animation')
		})
	})

	observerNextJS.observe(document.querySelector('.nextjs'))

	const observerMaterialUI = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const materialUI = entry.target.querySelector('#progress-bar-materialUI')

			if (entry.isIntersecting) {
				materialUI.classList.add('materialUI__animation')
				return
			}

			materialUI.classList.remove('materialUI__animation')
		})
	})

	observerMaterialUI.observe(document.querySelector('.materialUI'))
}

export default observersForTimeline
