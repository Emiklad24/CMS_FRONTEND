import Layout from "@components/Layout/Layout"
import Hero from "@components/Hero/Hero"
import FeatureOne from "@components/FeatureOne/FeatureOne"
import Solutions from "@components/Solutions/Solutions"
import FeatureStat from "@components/FeatureStat/FeatureStat"
import ContactForm from "@components/ContactForm/ContactForm"

// import Head from "next/head"
// import Image from "next/image"
// import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<Layout>
			<Hero />
			<FeatureOne />
			<Solutions />
			<FeatureStat />
			<ContactForm />
		</Layout>
	)
}
