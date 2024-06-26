import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import { User } from "../store/authStore";

const useGetUserProfileByUsername = (username: string | null) => {

	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	const userProfileStore = useUserProfileStore() as {
		userProfile: User | null;
		setUserProfile: (userProfile: User | null) => void;
	};
	
	const userProfile: User | null = userProfileStore.userProfile;
	const setUserProfile = userProfileStore.setUserProfile;

	useEffect(() => {
		if (!username) {
			showToast("Error", "Username is null", "error");
			setIsLoading(false);
			return;
		}

		const getUserProfile = async () => {
			setIsLoading(true);
			try {
				const q = query(collection(firestore, "users"), where("username", "==", username));
				const querySnapshot = await getDocs(q);
				if (querySnapshot.empty) return setUserProfile(null);

				let userDoc: User | null = null;
				querySnapshot.forEach((doc) => {
					userDoc = doc.data() as User;
				});

				setUserProfile(userDoc);
			} catch (error) {
				const errorMessage = (error as Error).message;
				showToast("Error", errorMessage, "error");
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
	}, [setUserProfile, username, showToast]);

	return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;