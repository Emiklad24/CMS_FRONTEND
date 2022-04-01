import Layout from "@components/Layout/Layout"
import Pricings from "@components/Pricings/Pricings"
import FaqPricing from "@components/FaqPricing/FaqPricing"
import FeatureOne from "@components/FeatureOne/FeatureOne"

const pricing = () => {
	return (
		<div>
			<Layout
				pageMeta={{
					title: "Affordable for every one",
				}}
			>
				<Pricings />
				<FeatureOne />
				<FaqPricing />
			</Layout>
		</div>
	)
}

export default pricing
