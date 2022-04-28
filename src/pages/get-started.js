import { useState } from "react"

import company from "@assets/images/company-icon.png"

import signup from "@assets/images/signup.svg"
import consultant from "@assets/images/consultant-male.png"
import Image from "next/image"
import Layout from "@components/Layout/Layout"
import CompanySignup from "@components/AuthForm/CompanySignup"
import ConsultantSignup from "@components/AuthForm/ConsultantSignup"

const SignUp = () => {
	const [activeForm, setActiveForm] = useState("")

	const toggleActiveForm = (value) => {
		setActiveForm(value || "")
	}

	return (
		<Layout
			pageMeta={{
				title: "Sign up - CMS",
			}}
		>
			<section className="w-full bg-background-bg pb-16">
				<div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-8">
					<div className="basis-1/2 hidden flex items-start justify-start text-center  my-auto p-16 lg:block">
						<Image src={signup} alt="signup" />
					</div>
					<div className="lg:basis-1/2 w-full flex items-center justify-center">
						<section className="p-4 lg:p-16 m-auto bg-white w-[full] lg:w-3/4">
							<h3 className="text-blue-primary text-xl lg:text-2xl text-center  font-lg font-bold tracking-normal leading-tight mb-2">
								Welcome!
							</h3>
							<h5 className="text-dark-gray text-xs lg:text-sm  text-center  font-lg font-bold tracking-normal leading-tight mb-2">
								Let&apos;s get you started
							</h5>

							<h1 className="text-dark-gray text-sm lg:text-xl text-center  font-lg tracking-normal leading-tight mb-4">
								Who are you signing as?
							</h1>

							<div className="flex items-center lg:justify-between justify-evenly mt-8 w-full">
								<button
									onClick={() => toggleActiveForm("company-form")}
									className="w-2/5 flex flex-col items-center justify-center text-center focus:outline-none focus:bg-blue-primary focus:border-none focus:text-white transition duration-150 ease-in-out hover:bg-blue-primary hover:text-white hover:bg-opacity-90 hover:border-none bg-white rounded border border-lighter-gray text-light-gray tracking-wide px-4 lg:px-8 py-4 text-sm lg:text-lg"
								>
									<Image src={company} alt="company-icon" />
									<span className="my-2">Company</span>
								</button>
								<button
									onClick={() => toggleActiveForm("consultant-form")}
									className="w-2/5 flex flex-col items-center justify-center text-center focus:outline-none focus:bg-blue-primary focus:border-none focus:text-white transition duration-150 ease-in-out hover:bg-blue-primary hover:text-white hover:bg-opacity-90 hover:border-none bg-white rounded border border-lighter-gray text-light-gray tracking-wide  px-4 lg:px-8 py-4 text-sm lg:text-lg"
								>
									<Image src={consultant} alt="company-icon" />
									<span className="my-2">Consultant</span>
								</button>
							</div>

							{/* display either forms onclick event */}
							<div className="my-8">
								{activeForm === "consultant-form" ? <ConsultantSignup /> : null}
								{activeForm === "company-form" ? <CompanySignup /> : null}
							</div>
						</section>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default SignUp
