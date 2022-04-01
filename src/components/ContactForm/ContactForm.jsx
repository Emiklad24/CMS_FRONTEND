import img from "@assets/images/contact.svg"
import Image from "next/image"

const ContactForm = () => {
	return (
		<div className="w-full">
			<div className="w-[90vw] m-auto flex flex-col-reverse md:flex-row items-center justify-between">
				<div className="form basis-1/2 flex flex-col items-center justify-start p-8 md:p-16">
					<span className="text-sm md:text-lg font-semibold">How can we help you?</span>
					<span className="text-xs md:text-sm text-light-gray my-4">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita
						fuga dolores consectetur. Quo at, facere impedit repellendus odio labore!
					</span>
					<div className="form my-4">
						<form className="w-full">
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block uppercase tracking-wide text-dark-gray text-xs font-bold mb-2"
										htmlFor="grid-first-name"
									>
										First Name
									</label>
									<input
										className="appearance-none block w-full text-dark-gray border border-lighter-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
										id="grid-first-name"
										type="text"
										placeholder="Jane"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-dark-gray text-xs font-bold mb-2"
										htmlFor="grid-last-name"
									>
										Last Name
									</label>
									<input
										className="appearance-none block w-full text-dark-gray border border-lighter-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
										id="grid-last-name"
										type="text"
										placeholder="Doe"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block uppercase tracking-wide text-dark-gray text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Email Address
									</label>
									<input
										className="appearance-none block w-full text-dark-gray border border-lighter-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
										id="grid-email"
										type="email"
										placeholder="********@*****.**"
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label
										className="block uppercase tracking-wide text-dark-gray text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Your Message
									</label>
									<textarea
										rows="6"
										className="appearance-none block w-full text-dark-gray border border-lighter-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
									></textarea>
								</div>
								<div className="flex justify-between w-full px-3">
									<button
										className=" text-xs md:text-sm w-full md:w-1/3 text-white bg-blue-primary hover:border hover:border-blue-primary hover:text-blue-primary hover:bg-white my-4 px-2 py-2"
										type="submit"
									>
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="img basis-1/2 p-8 md:p-16">
					<Image src={img} alt="" />
				</div>
			</div>
		</div>
	)
}

export default ContactForm
