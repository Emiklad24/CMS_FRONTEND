import React from "react"
import SignupModal from "@components/Modals/SignupModal"
import { FcCalendar } from "react-icons/fc"

import { CgMenuGridO } from "react-icons/cg"
import { IoIosArrowForward } from "react-icons/io"
import { RiMenu3Line } from "react-icons/ri"

const Skeleton = () => {
	const today = new Date()
	const yyyy = today.getFullYear()
	let mm = today.getMonth() + 1 // Months start at 0!
	let dd = today.getDate()

	if (dd < 10) dd = "0" + dd
	if (mm < 10) mm = "0" + mm

	const todayDate = dd + " - " + mm + " - " + yyyy

	return (
		<div>
			{/* container */}
			<section className="">
				{/* container body */}
				<div className="w-full grid grid-cols-6 gap-4 flex flex-col lg:flex-row items-center justify-start overflow-hidden">
					{/* left-sidebar */}
					<aside className=" hidden w-full h-[100vh] lg:flex lg:flex-col items-center justify-start bg-white px-4 py-6  ">
						{/* logo, profile, email */}
						<div className="w-full flex flex-col items-center justify-center">
							<span className="w-14 h-14 my-3 rounded-full bg-blue-primary"></span>
							<span className="w-2/4 h-4 mx-auto my-1 rounded-lg bg-lighter-gray"></span>
							<span className="w-3/4 h-2 mx-auto my-1 rounded-lg bg-lighter-gray"></span>
						</div>

						{/* nav links */}
						<div className="w-full mt-12 items-center">
							<div className="grid grid-cols-6 gap-2 mb-4 items-center justify-between">
								<div className="w-8 h-8 rounded-full bg-lighter-gray"></div>
								<div className=" col-span-5 w-2/3 h-3 mx-2 rounded-lg bg-lighter-gray"></div>
							</div>
							<div className="grid grid-cols-6 gap-2 mb-4 items-center justify-between">
								<div className="w-8 h-8 rounded-full bg-lighter-gray"></div>
								<div className=" col-span-5 w-2/3 h-3 mx-2 rounded-lg bg-lighter-gray"></div>
							</div>
							<div className="grid grid-cols-6 gap-2 mb-4 items-center justify-between">
								<div className="w-8 h-8 rounded-full bg-lighter-gray"></div>
								<div className=" col-span-5 w-2/3 h-3 mx-2 rounded-lg bg-lighter-gray"></div>
							</div>
							<div className="grid grid-cols-6 gap-2 mb-4 items-center justify-between">
								<div className="w-8 h-8 rounded-full bg-lighter-gray"></div>
								<div className=" col-span-5 w-2/3 h-3 mx-2 rounded-lg bg-lighter-gray"></div>
							</div>
							<div className="grid grid-cols-6 gap-2 mb-4 items-center justify-between">
								<div className="w-8 h-8 rounded-full bg-lighter-gray"></div>
								<div className=" col-span-5 w-2/3 h-3 mx-2 rounded-lg bg-lighter-gray"></div>
							</div>
						</div>
					</aside>

					{/* main-content */}
					<section className="lg:col-span-4 col-span-6 h-[100vh] items-start justify-start px-8 bg-off-white rounded-3xl">
						{/* Navigation */}
						<header className="w-full relative flex flex-row flex-wrap items-left justify-between py-8">
							<h2 className="my-2 text-2xl font-bold">Dashboard</h2>

							{/* date */}
							<div className="hidden lg:flex flex-row items-center justify-between lg:text-sm text-xs text-white bg-gold px-2 py-2 text-center rounded-sm">
								<FcCalendar className="lg:text-2xl text-sm mr-2" />
								{todayDate}
							</div>

							{/* mobile menu */}
							<div className="lg:hidden flex items-center">
								<RiMenu3Line className="text-2xl" />
							</div>
						</header>

						{/* Hero welcome */}
						<div className="lg:w-10/12 w-full h-40 lg:h-48 bg-blue-primary rounded-lg"></div>
					</section>

					{/* right sidebar */}
					<aside className="hidden w-full h-[100vh] lg:flex lg:flex-col items-center justify-start bg-white px-2 py-6">
						<div className="w-full flex flex-row items-start justify-between">
							<div className="basis-2/3 flex flex-col ">
								<span className="rounded-lg text-sm font-montserrat">
									My Profile
								</span>
								<span className="w-3/5 h-2 my-2 rounded-lg bg-lighter-gray"></span>
							</div>
							<button>
								<CgMenuGridO className="basis-1/3 text-3xl text-dark-gray hover:text-blue-primary" />
							</button>
						</div>

						{/* My task */}
						<div className="flex flex-col items-start justify-center w-full bg-off-white shadow-xl px-4 py-4 my-4 ">
							<div className="flex flex-row items-start justify-between w-full mb-4">
								<span className="text-sm">Tasks</span>
							</div>
							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-blue-primary text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>

							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-blue-primary text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>

							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-blue-primary text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>

							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-blue-primary text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>
						</div>

						{/* Team members */}
						<div className="flex flex-col items-start justify-center w-full bg-off-white shadow-xl px-4 py-4 my-4 ">
							<div className="flex flex-row items-start justify-between w-full mb-4">
								<span className="text-sm">Team members</span>
							</div>
							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-gold text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>

							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-gold text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>

							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-gold text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>

							<div className="w-full grid grid-cols-4 gap-1 items-center justify-between mb-3">
								<span className="w-6 h-6 rounded-full bg-gold text-white mx-1 "></span>
								<div className="col-span-2 items-start justify-start">
									<div className="flex flex-col">
										<span className="w-2/4 h-2 my-1 rounded-lg bg-lighter-gray"></span>
										<span className="w-3/4 h-1  my-1 rounded-lg bg-lighter-gray"></span>
									</div>
								</div>
								<IoIosArrowForward className="mx-4" />
							</div>
						</div>
					</aside>
				</div>
				{/* modal */}
				<SignupModal />
			</section>
		</div>
	)
}

export default Skeleton
