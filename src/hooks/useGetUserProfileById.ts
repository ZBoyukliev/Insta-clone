import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserProfileById = (userId: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userProfile, setUserProfile] = useState<DocumentData | null>(null);

	const showToast = useShowToast();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			setUserProfile(null);
			try {
			 const userRef = await getDoc(doc(firestore, "users", userId));
			 if (userRef.exists()) {
				 setUserProfile(userRef.data() as DocumentData); 
			 }
			} catch (error: any) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};
		getUserProfile();
	}, [showToast, setUserProfile, userId]);

	return { isLoading, userProfile, setUserProfile };
};

export default useGetUserProfileById;