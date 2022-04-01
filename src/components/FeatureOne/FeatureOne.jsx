import feature1 from "@assets/images/feature1.svg"
import feature2 from "@assets/images/feature2.svg"
import feature3 from "@assets/images/feature3.svg"
import Image from "next/image"

const FeatureOne = () => {
	return (
		<section className="w-[90vw] m-auto">
			<div className="flex flex-col md:flex-row items-center justify-center">
				<div className="flex basis-1/2 p-2 md:p-8">
					<div className="">
						<p className="leading-6 text-blue-primary text-center md:text-left font-semibold uppercase">
							Features
						</p>
						<h4 className="mt-2 text-md md:text-2xl leading-8 font-extrabold text-dark-gray text-center md:text-left sm:leading-9">
							Interactivity between team members is the key of the success.
						</h4>
						<p className="mt-4 text-sm md:text-md leading-6 text-light-gray text-justify md:text-left">
							Build a simply and powered collaborative space for all your team. Track,
							share, measure, you have a fully control, it&apos;s never be simply and
							efficient.
						</p>
						<ul className="mt-8 md:grid md:grid-cols-2 gap-6">
							<li className="mt-6 lg:mt-0">
								<div className="flex text-xs md:text-lg">
									<span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-primary text-background-bg ">
										<svg
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</span>
									<span className="ml-4 text-base leading-6 font-medium text-dark-gray ">
										Live modifications
									</span>
								</div>
							</li>
							<li className="mt-6 lg:mt-0">
								<div className="flex">
									<span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-primary text-background-bg">
										<svg
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</span>
									<span className="ml-4 text-base leading-6 font-medium text-dark-gray ">
										Data tracker
									</span>
								</div>
							</li>
							<li className="mt-6 lg:mt-0">
								<div className="flex">
									<span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-primary text-background-bg">
										<svg
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</span>
									<span className="ml-4 text-base leading-6 font-medium text-dark-gray ">
										24/7 support
									</span>
								</div>
							</li>
							<li className="mt-6 lg:mt-0">
								<div className="flex">
									<span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-primary text-background-bg">
										<svg
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</span>
									<span className="ml-4 text-base leading-6 font-medium text-dark-gray ">
										Free tips to improve work time
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex basis-1/2">
					<section className="p-8">
						<div className="flex flex-wrap -mx-4">
							<div className="flex m-auto w-1/2 px-4 my-4">
								<Image
									className="h-full w-full bg-cover rounded"
									src={feature1}
									alt=""
								/>
							</div>
							<div className="flex flex-row  h-auto">
								<div className="mx-2">
									<Image className="rounded" src={feature2} alt="" />
								</div>
								<div>
									<Image className="rounded" src={feature3} alt="" />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
	)
}

export default FeatureOne
