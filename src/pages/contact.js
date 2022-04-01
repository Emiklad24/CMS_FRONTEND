import ContactForm from "@components/ContactForm/ContactForm"
import Layout from "@components/Layout/Layout"
import FaqMain from "@components/FaqMain/FaqMain"

const contact = () => {
	return (
		<div>
			<Layout
				pageMeta={{
					title: "Get in touch with us",
				}}
			>
				<FaqMain />
				<ContactForm />
			</Layout>
		</div>
	)
}

export default contact
