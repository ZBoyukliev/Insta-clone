import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	const showToast = useShowToast();
	const logoutUser = useAuthStore((state) => (state as { logout: () => void }).logout);

	const handleLogout = async () => {
		try {
			await signOut();
			localStorage.removeItem("user-info");
			logoutUser();
		} catch (error) {
			const errorMessage = (error as { message: string })?.message || "An unknown error occurred";
			showToast("Error", errorMessage, "error");
		}
	};

	return { handleLogout, isLoggingOut, error };
};

export default useLogout;