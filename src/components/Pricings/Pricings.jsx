const Pricings = () => {
	return (
		<div>
			<section className="w-[90vw] m-auto py-2 my-8">
				<div className=" mx-auto">
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
											id="2c67e949-4a23-49f7-bf27-ca140852cf21"
											x="0"
											y="0"
											width=".135"
											height=".30"
										>
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
										width="52"
										height="24"
									/>
								</svg>
							</span>
							Affordable for everyone
						</h2>
						<p className=" text-light-gray text-xs md:text-sm">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</p>
					</div>
					<div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
						<div>
							<div className="p-8 bg-background-bg">
								<div className="mb-4 text-center">
									<p className="text-xl tracking-wide text-dark-gray">
										Starter Plan
									</p>
									<div className="flex items-center justify-center">
										<p className="mr-2 text-5xl font-semibold text-blue-primary lg:text-6xl">
											$39
										</p>
										<p className="text-lg text-black">/ month</p>
									</div>
								</div>
								<ul className="mb-8 space-y-2">
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-blue-primary"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-light-gray">10 deploys per day</p>
									</li>
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-blue-primary"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-light-gray">10 GB of storage</p>
									</li>
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-blue-primary"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-light-gray">3 domains</p>
									</li>
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-blue-primary"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-light-gray">SSL Certificates</p>
									</li>
								</ul>
								<button
									type="submit"
									className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-white transition duration-200 text-white bg-blue-primary hover:bg-background-bg hover:border hover:border-blue-primary hover:text-blue-primary hover:bg-white"
								>
									Get Now
								</button>
							</div>
							<div className="w-11/12 h-2 mx-auto bg-background-bg opacity-75" />
							<div className="w-10/12 h-2 mx-auto bg-background-bg opacity-50" />
							<div className="w-9/12 h-2 mx-auto bg-background-bg opacity-25" />
						</div>
						<div>
							<div className="p-8 bg-blue-primary">
								<div className="mb-4 text-center">
									<p className="text-xl tracking-wide text-white">Pro Plan</p>
									<div className="flex items-center justify-center">
										<p className="mr-2 text-5xl font-semibold text-gold lg:text-6xl">
											$59
										</p>
										<p className="text-lg text-white">/ month</p>
									</div>
								</div>
								<ul className="mb-8 space-y-2">
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-gold"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-background-bg">100 deploys per day</p>
									</li>
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-gold"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-background-bg">50 GB of storage</p>
									</li>
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-gold"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-background-bg">Unlimited domains</p>
									</li>
									<li className="flex items-center">
										<div className="mr-3">
											<svg
												className="w-4 h-4 text-gold"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeWidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="text-background-bg">SSL Certificates</p>
									</li>
								</ul>
								<button
									type="submit"
									className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 text-blue-primary bg-gold hover:text-gold hover:bg-blue-primary hover:border hover:border-gold"
								>
									Get Now
								</button>
							</div>
							<div className="w-11/12 h-2 mx-auto bg-blue-primary opacity-75" />
							<div className="w-10/12 h-2 mx-auto bg-blue-primary opacity-50" />
							<div className="w-9/12 h-2 mx-auto bg-blue-primary opacity-25" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Pricings
