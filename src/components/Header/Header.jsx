import React, { useState } from "react"
import Link from "next/link"
import logo from "@assets/images/vkm-logo.svg"
import Image from "next/image"

const Header = () => {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<div className="w-full bg-white shadow-sm z-[50] font-sans">
			<header className="w-[90vw]  m-auto">
				{/* Navigation for big screens */}
				<nav className="flex flex-row justify-between items-center bg-transparent py-4 md:py-2 relative">
					<div className="logo basis-3/4 md:basis-3/6">
						<div className="flex flex-row items-center justify-start">
							<Link href="/">
								<a>
									<Image
										src={logo}
										alt="vkm logo"
										className="w-30 h-8 md:h-14 my-auto"
									/>
								</a>
							</Link>

							<span className="text-[#1E2B00] uppercase text-xs md:text-sm ml-2">
								<Link href="/">
									<a>Consultant Management System</a>
								</Link>
							</span>
						</div>
					</div>

					<div className="md:items-center justify-center md:w-full flex md:basis-1/6">
						<div className="md:flex capitalize text-sm  hidden">
							<Link href="/features">
								<a className="text-blue-primary  mx-2 md:mx-4 py-2 relative hoverable">
									Features
								</a>
							</Link>
							<Link href="/pricing">
								<a className="text-blue-primary  mx-2 md:mx-4 py-2 relative hoverable">
									Pricing
								</a>
							</Link>
							<Link href="/contact">
								<a className="text-blue-primary  mx-2 md:mx-4 py-2 relative hoverable">
									Contact
								</a>
							</Link>
						</div>
					</div>

					{/* sign up Login... */}
					<div className="hidden md:flex md:text-xs capitalize items-center justify-end basis-2/6 text-center">
						<Link href="/login">
							<a className=" md:text-blue-primary  border border-blue-primary px-4 py-2 relative hover:text-white hover:bg-blue-primary">
								Login
							</a>
						</Link>
						<Link href="/get-started">
							<a className=" md:text-white bg-blue-primary hover:border hover:border-blue-primary hover:text-blue-primary hover:bg-white ml-4  px-4 py-2 relative">
								Get Started
							</a>
						</Link>
					</div>

					{/* sidebar menu button */}

					{showSidebar ? (
						<svg
							className="flex items-center cursor-pointer fixed right-5 my-2 z-50 md:hidden"
							onClick={() => setShowSidebar(!showSidebar)}
							width="25"
							height="25"
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g>
								<polyline
									fill="none"
									points="649,137.999 675,137.999 675,155.999 661,155.999"
									stroke="#FFFFFF"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="2"
								/>
								<polyline
									fill="none"
									points="653,155.999 649,155.999 649,141.999"
									stroke="#FFFFFF"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="2"
								/>
								<polyline
									fill="none"
									points="661,156 653,162 653,156"
									stroke="#FFFFFF"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="2"
								/>
							</g>
							<g>
								<path d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z" />
								<path d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z" />
							</g>
						</svg>
					) : (
						<svg
							onClick={() => setShowSidebar(!showSidebar)}
							className=" z-30 flex items-center cursor-pointer right-5 my-2 md:hidden"
							fill="#000"
							viewBox="0 0 100 80"
							width="25"
							height="25"
						>
							<rect width="70" height="10"></rect>
							<rect y="30" width="100" height="10"></rect>
							<rect y="60" width="50" height="10"></rect>
						</svg>
					)}
				</nav>
			</header>

			{/* sidebar menu content */}

			<div
				className={`top-0 right-0 w-5/6 bg-white drop-shadow-2xl fixed h-full z-40 ease-in-out duration-300 ${
					showSidebar ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* menu link */}
				<div className="mt-16 text-xl text-black flex flex-col items-center text-dark-gray">
					<Link href="/features">
						<a className="flex py-2 px-4 hover:bg-gray-200 hover:border-l-4 hover:border-l-blue-primary">
							Features
						</a>
					</Link>
					<Link href="/pricing">
						<a className="flex py-2 px-4 hover:bg-gray-200 hover:border-l-4 hover:border-l-blue-primary">
							Pricing
						</a>
					</Link>
					<Link href="/contact">
						<a className="flex py-2 px-4 hover:bg-gray-200 hover:border-l-4 hover:border-l-blue-primary">
							Contact
						</a>
					</Link>
				</div>

				<div className="accounts flex flex-col items-center justify-center text-center my-12 p-8">
					<Link href="/login">
						<a className="w-full text-blue-primary  border border-blue-primary px-2 py-2 relative hover:text-white hover:bg-blue-primary">
							Sign in
						</a>
					</Link>
					<Link href="/signup">
						<a className="w-full text-white bg-blue-primary hover:border hover:border-blue-primary hover:text-blue-primary hover:bg-white my-4 px-2 py-2 relative">
							Get Started
						</a>
					</Link>
				</div>

				{/* sidebar footer section */}
				<div className="fixed bottom-0 flex flex-row justify-center py-4 left-0 bg-gray-100 text-black text-center w-full">
					<span className="text-xs items-center text-black justify-center">
						Copyright &copy; {new Date().getFullYear()}. VKM studios{" "}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Header
