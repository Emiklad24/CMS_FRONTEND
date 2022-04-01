import Link from "next/link"

const FaqMain = () => {
	return (
		<section className="w-[90vw] m-auto text-dark-gray">
			<div className="container flex flex-col items-center p-4 mx-auto md:p-8">
				<h1 className="md:text-3xl font-bold leading-none text-center text-xl">
					Help Center
				</h1>
				<div className="relative mt-6 mb-12">
					<input
						type="search"
						name="Search"
						placeholder="Search..."
						className="w-full p-4 text-sm sm:w-96 focus:outline-none bg-background-bg text-light-gray focus:border focus:border-blue-primary"
					/>
				</div>
				<div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-lighter-gray">
					<div className="flex flex-col w-full divide-y divide-lighter-gray">
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Billing
							</a>
						</Link>
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Support
							</a>
						</Link>
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Account
							</a>
						</Link>
					</div>
					<div className="flex flex-col w-full divide-y divide-lighter-gray">
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Features
							</a>
						</Link>
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Contact us
							</a>
						</Link>
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								My orders
							</a>
						</Link>
					</div>
					<div className="hidden w-full divide-y sm:flex-col sm:flex divide-lighter-gray">
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Enterprise
							</a>
						</Link>
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Privacy
							</a>
						</Link>
						<Link rel="noopener noreferrer" href="/">
							<a className="flex items-center justify-center p-4 sm:py-8 lg:py-12">
								Developers
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FaqMain
