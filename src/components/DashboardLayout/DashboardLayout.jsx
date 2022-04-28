import Head from "next/head"
import { useRouter } from "next/router"
import DashboardFooter from "@components/Footer/Footer"
import DashboardHeader from "@components/Header/Header"
import PropTypes from "prop-types"

const DashboardLayout = ({ children, pageMeta }) => {
	const meta = {
		title: "The Best CMS platform",
		description: "Discover and track your consultants across the globe",
		type: "website",
		...pageMeta,
	}

	const router = useRouter()
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<link rel="icon" href="/favicon.ico" />
				{/* open graph meta tag */}
				<meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:site_name" content="Consultant Management System" />

				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<div>
				<DashboardHeader />
				<main>{children}</main>
				<DashboardFooter />
			</div>
		</>
	)
}

DashboardLayout.propTypes = {
	children: PropTypes.elementType.isRequired,
	pageMeta: PropTypes.object,
}

export default DashboardLayout
