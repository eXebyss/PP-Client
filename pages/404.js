import Link from 'next/link'

export default function Custom404() {
	return (
		<main className="h-screen w-full flex flex-col justify-center items-center">
			<h1 className="text-9xl font-extrabold tracking-widest">404</h1>
			<div className="bg-error-content px-2 text-sm lg:text-base rounded rotate-12 absolute ">
				Page Not Found
			</div>
			<div className="mt-5 relative inline-block text-sm font-medium text-primary group active:text-primary-focus focus:outline-none focus:ring">
				<span className="relative block px-8 py-3 bg-base-100 border border-current z-10">
					<Link href="/">Go Home</Link>
				</span>
				<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0 z-0" />
			</div>
		</main>
	)
}
