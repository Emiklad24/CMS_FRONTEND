import { useFormik } from "formik"
import * as Yup from "yup"

export const useCompanySignupFormValidation = (onSubmitHandler) => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, "Must be 5 characters or more")
				.required("This field is empty!"),
			email: Yup.string().email("Invalid email address").required("This field is empty!"),
			password: Yup.string()
				.required("This field is empty!")
				.min(8, "Password is too short - should contain min. 8 characters")
				.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
		}),
		onSubmit: onSubmitHandler,
	})

	return formik
}
