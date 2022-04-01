import Layout from "@components/Layout/Layout"
import FeatureTwo from "@components/FeatureTwo/FeatureTwo"
import FeatureThree from "@components/FeatureThree/FeatureThree"

const features = () => {
	return (
		<div>
			<Layout
				pageMeta={{
					title: "All the features you want",
				}}
			>
				<FeatureTwo />
				<FeatureThree />
			</Layout>
		</div>
	)
}

export default features
