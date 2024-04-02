import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import { User } from "../store/authStore"; // Assuming the User type is defined here similar to file_context_3

const useGetUserProfileByUsername = (username: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	const userProfileStore = useUserProfileStore() as {
		userProfile: User | null;
		setUserProfile: (userProfile: User | null) => void;
	};
	const userProfile: User | null = userProfileStore.userProfile;
	const setUserProfile = userProfileStore.setUserProfile;

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
				const q = query(collection(firestore, "users"), where("username", "==", username));
                console.log('q', q)
				const querySnapshot = await getDocs(q);
                console.log('querySnapshot', querySnapshot)
				if (querySnapshot.empty) return setUserProfile(null);

				let userDoc: User | null = null;
                console.log('userDoc', userDoc)
				querySnapshot.forEach((doc) => {
					userDoc = doc.data() as User;
				});

				setUserProfile(userDoc);
				console.log(userDoc);
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