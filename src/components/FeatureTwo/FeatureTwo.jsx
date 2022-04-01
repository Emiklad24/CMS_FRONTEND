import Image from "next/image"
import about1 from "@assets/images/about1.svg"

const FeatureTwo = () => {
	return (
		<div className="w-[90vw] m-auto">
			<section className="w-[90vw] m-auto py-2 my-8">
				<div className="mx-auto sm:text-center lg:max-w-2xl">
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
											id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
											x="0"
											y="0"
											width=".135"
											height=".30"
										>
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
										width="52"
										height="24"
									/>
								</svg>
							</span>
							We are all about helping you keep track of consultants
						</h2>
						<p className=" text-light-gray text-xs md:text-sm">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</p>
					</div>
					<div className="mb-4 lg:mb-6">
						<Image
							className=" p-4 w-full h-56 sm:h-64 md:h-80 lg:h-96"
							src={about1}
							alt="about us"
						/>
					</div>
					<p className="text-xs md:text-sm text-light-gray sm:mx-auto">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud ullamco laboris aliquip ex ea.
					</p>
				</div>
			</section>
		</div>
	)
}

export default FeatureTwo
