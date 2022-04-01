import Layout from "@components/Layout/Layout"
import Hero from "@components/Hero/Hero"
import FeatureOne from "@components/FeatureOne/FeatureOne"
import Solutions from "@components/Solutions/Solutions"
import FeatureStat from "@components/FeatureStat/FeatureStat"

export default function Home() {
	return (
		<Layout>
			<Hero />
			<FeatureOne />
			<Solutions />
			<FeatureStat />
		</Layout>
	)
}
