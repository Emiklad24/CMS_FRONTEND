import Link from "next/link"
import ErrorPage from "@assets/images/404.svg"
import Image from "next/image"

const NotFound = () => {
	return (
		<div>
			<section className="w-full bg-background-bg p-24">
				<div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
					<div className="flex basis-1/2 hidden md:block">
						<Image src={ErrorPage} alt="page not found" className="p-32" />
					</div>
					<div className="flex basis-1/2 items-center justify-center">
						<section className="p-4 md:p-12 m-auto bg-white w-[full] md:w-3/4">
							<div className="w-full mx-auto flex flex-col items-center justify-center">
								<h1 className="text-xl md:text-7xl text-center text-dark-gray ">
									Oops!
								</h1>
								<p className="text-xs md:text-sm text-center text-dark-gray my-4">
									The page you are looking for does not exist
								</p>
								<Link href="/">
									<a className="w-full p-2 md:p-4 text-xs md:text-sm text-white text-center bg-blue-primary my-2 cursor-pointer">
										Go Back
									</a>
								</Link>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NotFound
