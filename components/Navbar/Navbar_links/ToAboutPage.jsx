import Link from 'next/link'

export default function ToAboutPage() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>
						<a>Back to Home</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
