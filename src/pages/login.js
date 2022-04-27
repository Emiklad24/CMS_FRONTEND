import Link from "next/link"

// import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner"
import signin from "@assets/images/signin.svg"

import Image from "next/image"
import { AiOutlineWarning } from "react-icons/ai"

import { useFormik } from "formik"
import * as Yup from "yup"
// import { useMutation } from "react-query"
// import { authInstanceAxios } from "@config/axiosInstance"
// import { SIGNUP_MUTATION_KEY } from "@config/queryKeys"
// import SuccessToast from "@components/Toasts/SuccessToast"
// import ErrorToast from "@components/Toasts/ErrorToast"
import Layout from "@components/Layout/Layout"

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("This field is empty!"),
			password: Yup.string()
				.required("This field is empty!")
				.min(8, "Password is too short - should contain min. 8 characters")
				.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
		}),
		// onSubmit: onSubmitHandler,
	})

	return (
		<Layout
			pageMeta={{
				title: "Login - CMS",
			}}
		>
			<section className="w-full bg-background-bg pb-16">
				<div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
					<div className="basis-1/2 hidden flex items-center text-center justify-center my-auto p-16 md:block">
						<Image src={signin} alt="sign in" className="p-32" />
					</div>
					<div className="flex basis-1/2 items-center justify-center">
						<section className="p-4 lg:p-12 m-auto bg-white w-[full] lg:w-3/4">
							<div className="w-full mx-auto ">
								<h1 className="text-sm md:text-xl text-center text-dark-gray">
									Login to your account
								</h1>
								<div className="py-4 flex flex-row  text-xs md-text-sm text-white">
									<Link href="/">
										<a className="basis-1/2 flex flex-col-reverse md:flex-row text-center items-center justify-between p-3 text-xs  w-full text-dark-gray border border-lighter-gray mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="27"
												height="27"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="mr-2 text-google"
											>
												<path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
											</svg>
											Continue with Google
										</a>
									</Link>
									<span className="mx-2"></span>
									<Link href="/">
										<a className="basis-1/2 flex flex-col-reverse md:flex-row text-center items-center justify-center p-3 text-xs  w-full text-dark-gray border border-lighter-gray mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="mr-2 text-linkedin"
											>
												<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
											</svg>
											Continue with LinkedIn
										</a>
									</Link>
								</div>
								<form onSubmit={formik.handleSubmit} className="w-full">
									<label htmlFor="email" className="flex flex-col">
										<span className=" text-xs font-medium text-light-gray">
											Your Email
										</span>
										<input
											className={
												formik.touched.email && formik.errors.email
													? "p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
													: "p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-lighter-gray leading-tight focus:outline-none focus:bg-white focus:border-blue-primary "
											}
											id="email"
											name="email"
											type="email"
											placeholder="Ex. james@bond.com"
											inputMode="email"
											required
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email ? (
											<div className="flex flex-row items-center text-danger text-xs italic">
												{" "}
												<AiOutlineWarning className="w-4 h-4" />
												{formik.errors.email}
											</div>
										) : null}
									</label>
									<label htmlFor="password" className="flex flex-col mt-4">
										<span className="text-xs font-medium text-light-gray">
											Your Password
										</span>
										<input
											id="password"
											name="password"
											type="password"
											placeholder="••••••••"
											required
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.password}
											className={
												formik.touched.password && formik.errors.password
													? "p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
													: "p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-lighter-gray leading-tight focus:outline-none focus:bg-white focus:border-blue-primary "
											}
										/>
										{formik.touched.password && formik.errors.password ? (
											<div className="flex flex-row items-center text-danger text-xs italic">
												{" "}
												<AiOutlineWarning className="w-4 h-4" />
												{formik.errors.password}
											</div>
										) : null}
									</label>
									<Link href="/password-reset">
										<a className="text-xs text-light-gray flex my-1 justify-end hover:text-blue-primary mb-4">
											Forgot password?
										</a>
									</Link>
									<button
										type="submit"
										className="w-full p-2 md:p-4 text-xs md:text-sm text-white bg-blue-primary my-2 cursor-pointer"
									>
										Continue with email
									</button>
								</form>
								<div className="space-y-2">
									<p className="text-xs md:text-sm flex flex-row md:justify-start justify-between text-dark-gray">
										Don&apos;t have an account?
										<Link href="/get-started">
											<a className="mx-2 text-right text-blue-primary">
												Create an account
											</a>
										</Link>
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Login
