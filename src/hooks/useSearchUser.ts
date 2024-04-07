import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where, DocumentData } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<DocumentData | null>(null);
	const showToast = useShowToast();

	const getUserProfile = async (username: string) => {
		setIsLoading(true);
		setUser(null);
		try {
			const q = query(collection(firestore, "users"), where("username", "==", username));

			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) return showToast("Error", "User not found", "error");

			querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (error: any) {
			showToast("Error", error.message, "error");
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;