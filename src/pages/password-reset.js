import Header from "@components/Header/Header"
import forgotPassword from "@assets/images/forgot.svg"
import Image from "next/image"

const PasswordReset = () => {
	return (
		<div>
			<Header />
			<section className="w-full bg-background-bg p-16">
				<div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
					<div className="flex basis-1/2 hidden md:block">
						<Image src={forgotPassword} alt="Forgot password" className="p-32" />
					</div>
					<div className="flex basis-1/2 items-center justify-center">
						<section className="p-4 md:p-12 m-auto bg-white w-[full] md:w-3/4">
							<div className="w-full mx-auto ">
								<h1 className="text-sm md:text-xl text-center text-dark-gray my-4">
									Confirm your email
								</h1>

								<form className="w-full">
									<label className="flex flex-col">
										<span className=" text-xs font-medium text-light-gray">
											Your Email
										</span>
										<input
											className="p-2 md:p-4 text-xs md:text-sm  w-full text-dark-gray border border-lighter-gray mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
											type="email"
											placeholder="Ex. james@bond.com"
											inputMode="email"
											required
										/>
									</label>

									<input
										type="submit"
										className="w-full p-2 md:p-4 text-xs md:text-sm text-white bg-blue-primary my-2 cursor-pointer"
										value="Confirm"
									/>
								</form>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PasswordReset
