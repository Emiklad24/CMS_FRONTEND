import { CONSULTANT_SIGNUP_MUTATION_KEY } from "@config/queryKeys"
import { useMutation } from "react-query"
import Router from "next/router"
import { submitSignupData } from "@services/mutation/createConsultant.service"
import { useUserCredentialsStore } from "@store/authStore.store"
import shallow from "zustand/shallow"

export const useCreateConsultant = () => {
	const [populateUserInfoAndJwt] = useUserCredentialsStore(
		(state) => [state.populateUserInfoAndJwt],
		shallow
	)

	const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
		mutationKey: CONSULTANT_SIGNUP_MUTATION_KEY,
		mutationFn: submitSignupData,
		onSuccess: (returnedData) => {
			populateUserInfoAndJwt(returnedData?.data)
			Router.replace("/dashboard")
		},
		onError: () => {},
	})

	return {
		mutate,
		isLoading,
		isError,
		isSuccess,
		reset,
		data,
	}
}
