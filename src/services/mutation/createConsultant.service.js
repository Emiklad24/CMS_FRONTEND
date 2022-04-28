import { publicInstanceAxios } from "@config/axiosInstance"

export const submitSignupData = async (values) => {
	const res = await publicInstanceAxios.post("/api/users", values)
	return res
}
