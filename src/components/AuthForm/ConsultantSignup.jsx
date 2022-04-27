
import Link from "next/link"

import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner"

import { AiOutlineWarning } from "react-icons/ai"

import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "react-query"
import { publicInstanceAxios } from "@config/axiosInstance"
import { SIGNUP_MUTATION_KEY } from "@config/queryKeys"
import SuccessToast from "@components/Toasts/SuccessToast"
import ErrorToast from "@components/Toasts/ErrorToast"
import Router from "next/router"



const ConsultantSignup = () => {
	// change values to sign up credentials to understand better
	const submitSignupData = async (values) => {
		const res = await publicInstanceAxios.post("/users", values)
		return res
	}

	const { mutate, isLoading, isError, isSuccess, reset } = useMutation({
		mutationKey: SIGNUP_MUTATION_KEY,
		mutationFn: submitSignupData,
		onSuccess: () => {
			// console.log(returnedData)
			//display signup successful toast, redirect to finish-setup wizard
			Router.replace("/dashboard")
		},
		onError: () => {
			// console.log(error)
			// display error toast, stay on page
		},
	})

	const onSubmitHandler = (values) => {
		mutate(values)
	}

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, "Must be 5 characters or more")
				.required("This field is empty!"),
			email: Yup.string().email("Invalid email address").required("This field is empty!"),
			password: Yup.string()
				.required("This field is empty!")
				.min(8, "Password is too short - should contain min. 8 characters")
				.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
		}),
		onSubmit: onSubmitHandler,
	})

	return (
		<div>
								<form onSubmit={formik.handleSubmit} className="w-full">
									<label htmlFor="name" className="flex flex-col">
										<span className=" text-xs font-medium text-light-gray">
											Your Name
										</span>
										<input
											className={
												formik.touched.name && formik.errors.name
													? "p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
													: "p-2 md:p-4 text-xs md:text-sm w-full text-dark-gray border border-lighter-gray leading-tight focus:outline-none focus:bg-white focus:border-blue-primary "
											}
											id="name"
											name="name"
											type="text"
											placeholder="Ex. Jane Doe"
											inputMode="name"
											required
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.name}
										/>
										{formik.touched.name && formik.errors.name ? (
											<div className="flex flex-row items-center text-danger text-xs italic">
												{" "}
												<AiOutlineWarning className="w-4 h-4" />
												{formik.errors.name}
											</div>
										) : null}
									</label>
									<label htmlFor="email" className="flex flex-col mt-4">
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
									<button
										type="submit"
										className="w-full p-2 md:p-4 text-xs md:text-sm text-white bg-blue-primary my-2 cursor-pointer"
									>
										{isLoading ? (
											<LoadingSpinner text="Signing you up..." />
										) : (
											"Sign up"
										)}
									</button>
									{isError && (
										<ErrorToast
											text="Failed to Sign up. Please try again"
											handleReset={reset}
										/>
									)}
									{isSuccess && (
										<SuccessToast
											text="Sign up Successful! Redirecting..."
											handleReset={reset}
										/>
									)}
								</form>
								<div className="space-y-2 w-full flex flex-col">
									<p className="text-xs md:text-sm flex flex-row md:justify-start justify-between text-dark-gray">
										Already have an account?
										<Link href="/login">
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
										<a href="/privacy-policy" className="text-blue-primary">
											{" "}
											Privacy Policy
										</a>
									</p>
								</div>
							</div>
	)
}

export default ConsultantSignup