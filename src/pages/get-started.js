import Link from "next/link"
import Header from "@components/Header/Header"
import signup from "@assets/images/signup.svg"
import Image from "next/image"

const SignUp = () => {
	return (
		<div>
			<Header />
			<section className="w-full bg-background-bg pb-16">
				<div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
					<div className="flex basis-1/2 hidden md:block">
						<Image src={signup} alt="get started" className="p-32" />
					</div>
					<div className="flex basis-1/2 items-center justify-center">
						<section className="p-4 md:p-12 m-auto bg-white w-[full] md:w-3/4">
							<div className="w-full mx-auto ">
								<h1 className="text-sm md:text-xl text-center text-dark-gray">
									Sign up to our product today for free
								</h1>
								<div className="py-4 flex flex-row  text-xs md-text-sm text-white">
									<Link href="/google">
										<a className="basis-1/2 flex flex-col md:flex-row text-center items-center justify-around p-2 bg-google">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="mr-1"
											>
												<path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
											</svg>
											Sign up with Google
										</a>
									</Link>
									<span className="mx-2"></span>
									<Link href="/linkedin">
										<a className="basis-1/2 flex flex-col md:flex-row text-center items-center justify-around p-2 bg-linkedin">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="mr-1"
											>
												<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
											</svg>
											Sign up with linkedIn
										</a>
									</Link>
								</div>
								<form className="w-full">
									<label className="flex flex-col">
										<span className=" text-xs font-medium text-light-gray">
											Your Name
										</span>
										<input
											className="p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-lighter-gray mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
											type="text"
											placeholder="Ex. Jane Doe"
											inputMode="name"
											required
										/>
									</label>
									<label className="flex flex-col">
										<span className="text-xs font-medium text-light-gray">
											Your Email
										</span>
										<input
											className="p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-lighter-gray mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
											type="email"
											placeholder="Ex. JaneDoe@email.co"
											required
										/>
									</label>
									<label className="flex flex-col">
										<span className="text-xs font-medium text-light-gray">
											Your Password
										</span>
										<input
											className="p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-lighter-gray mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary"
											type="password"
											placeholder="••••••••"
											required
										/>
									</label>
									<input
										type="submit"
										className="w-full p-2 md:p-4 text-xs md:text-sm text-white bg-blue-primary my-2 cursor-pointer"
										value="Sign Up"
									/>
								</form>
								<div className="space-y-2 w-full flex flex-col">
									<p className="text-xs md:text-sm flex flex-row md:justify-start justify-between text-dark-gray">
										Already have an account?
										<Link href="/sign-in">
											<a className="mx-2 text-right text-blue-primary">
												Log In
											</a>
										</Link>
									</p>
									<p className="block my-8 text-xs font-medium text-left text-dark-gray">
										By clicking &lsquo;Sign Up&lsquo; you agree to our
										<a href="/terms" className="text-blue-primary">
											{" "}
											Terms of Service
										</a>{" "}
										and
										<a href="/finish-setup" className="text-blue-primary">
											{" "}
											Privacy Policy
										</a>
										.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SignUp
