import img from "@assets/images/solution.svg"
import Image from "next/image"

const Solutions = () => {
	const solutionOfferings = [
		{
			id: 1,
			title: "Audit Service",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 2,
			title: "Business Development Service",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 3,
			title: "Strategic Planning Services",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 4,
			title: "Company Formation Services",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	]
	return (
		<div className="w-full">
			<div className="w-[90vw] m-auto flex flex-col-reverse md:flex-row items-center justify-between">
				<div className="image hidden md:block basis-1/2 p-8 md:p-16">
					<Image src={img} alt="solutions" />
				</div>
				<div className="solution basis-1/2 flex flex-col items-center justify-between md:p-16">
					<span className="heading text-lg md:text-2xl font-semibold capitalize md:text-left text-center text-dark-gray my-4">
						We help our clients unlock growth by focusing on key solution areas:
					</span>
					<div className="help">
						{solutionOfferings.map((solution, index) => (
							<div key={index} className="flex flex-col items-left justify-start">
								<span className="text-sm md:text-md font-bold text-dark-gray">
									{solution.title || ""}
								</span>
								<span className="text-xs md:text-sm text-light-gray my-4">
									{solution.desc }
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solutions
