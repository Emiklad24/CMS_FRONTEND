import React, { useState } from "react"
import PropTypes from "prop-types"

const ErrorToast = (props) => {
	const [showToast, setShowToast] = useState(false)
	const handleReset = () => setShowToast(true)
	return (
		<span className="fixed top-0 right-0">
			{!showToast ? (
				<div
					id="toast-danger"
					className="flex items-center w-full max-w-xs p-6 mb-4  bg-white shadow"
					role="alert"
				>
					<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-danger mx-2 rounded-full">
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<div className="mx-4 ml-3 text-sm font-normal">{props.text}</div>
					<button
						onClick={handleReset}
						type="button"
						className="ml-auto  bg-white text-darkgray hover:text-danger p-1.5 inline-flex h-8 w-8"
						data-dismiss-target="#toast-danger"
						aria-label="Close"
					>
						<span className="sr-only">Close</span>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			) : null}
		</span>
	)
}

ErrorToast.propTypes = {
	text: PropTypes.string.isRequired,
}

export default ErrorToast
