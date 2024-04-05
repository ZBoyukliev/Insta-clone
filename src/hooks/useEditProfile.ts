import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";

interface Inputs {
	fullName?: string;
	username?: string;
	bio?: string;
}

const useEditProfile = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const authUser = useAuthStore((state:any) => state.user);
	const setAuthUser = useAuthStore((state:any) => state.setUser);
	const setUserProfile = useUserProfileStore((state:any) => state.setUserProfile);

	const showToast = useShowToast();

	const editProfile = async (inputs: Inputs, selectedFile: string | null) => {
		if (isUpdating || !authUser) return;
		setIsUpdating(true);

		const storageRef = ref(storage, `profilePics/${authUser.uid}`);
		const userDocRef = doc(firestore, "users", authUser.uid);

		let URL = "";
		try {
			if (selectedFile) {
				await uploadString(storageRef, selectedFile, "data_url");
				URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
			}

			const updatedUser = {
				...authUser,
				fullName: inputs.fullName || authUser.fullName,
				username: inputs.username || authUser.username,
				bio: inputs.bio || authUser.bio,
				profilePicURL: URL || authUser.profilePicURL,
			};

			await updateDoc(userDocRef, updatedUser);
			localStorage.setItem("user-info", JSON.stringify(updatedUser));
			setAuthUser(updatedUser);
			setUserProfile(updatedUser);
			showToast("Success", "Profile updated successfully", "success");
		} catch (error: any) {
			showToast("Error", error.message, "error");
		}
	};

	return { editProfile, isUpdating };
};

export default useEditProfile;
