const FeatureStat = () => {
	return (
		<div>
			<section className="w-[90vw] m-auto py-2 my-8">
				<div className="mx-auto ">
					<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
						<h2 className="max-w-lg my-2 font-sans text-md md:text-3xl font-bold leading-none tracking-tight text-dark-gray md:mx-auto">
							<span className="relative inline-block">
								<svg
									viewBox="0 0 52 24"
									fill="currentColor"
									className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-primary lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
								>
									<defs>
										<pattern
											id="d5589eeb-3fca-4f01-ac3e-983224745704"
											x="0"
											y="0"
											width=".135"
											height=".30"
										>
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
										width="52"
										height="24"
									/>
								</svg>
							</span>
							Various corporate bodies have signed up for this and are loving every
							bit of it!
						</h2>
						<p className=" text-light-gray text-xs md:text-sm">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</p>
					</div>
					<div className="relative w-full flex items-center justify-center mx-auto mb-4 overflow-hidden transition-shadow duration-300 border border-lighter-gray rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
						<div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-primary group-hover:scale-x-100" />
						<div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-primary group-hover:scale-y-100" />
						<div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-primary group-hover:scale-x-100" />
						<div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-primary group-hover:scale-y-100" />
						<div className="relative flex flex-col items-center h-full py-10 duration-300 bg-transparent rounded-sm transition-color sm:items-stretch sm:flex-row">
							<div className="px-12 py-8 text-center">
								<h6 className="text-4xl font-bold text-blue-primary sm:text-5xl">
									23.5k
								</h6>
								<p className="text-center text-xs md:text-sm text-light-gray font-bold">
									Active Users
								</p>
							</div>
							<div className="w-56 h-1 transition duration-300 transform bg-lighter-gray rounded-full group-hover:bg-blue-primary group-hover:scale-110 sm:h-auto sm:w-1" />
							<div className="px-12 py-8 text-center">
								<h6 className="text-4xl font-bold text-blue-primary sm:text-5xl">
									24/7
								</h6>
								<p className="text-center text-xs md:text-sm text-light-gray font-bold">
									Dedicated Support
								</p>
							</div>
						</div>
					</div>
					<p className="mx-auto mb-4 text-xs md:text-sm text-light-gray sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</section>
		</div>
	)
}

export default FeatureStat
