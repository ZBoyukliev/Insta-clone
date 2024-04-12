import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { User } from "../store/authStore";

interface UserData extends User {
	id: string;
}

const useGetSuggestedUsers = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [suggestedUsers, setSuggestedUsers] = useState<UserData[]>([]);
	const authUser = useAuthStore((state: any) => state.user);
	const showToast = useShowToast();

	useEffect(() => {
		const getSuggestedUsers = async () => {
			setIsLoading(true);
			try {
				const usersRef = collection(firestore, "users");
				const q = query(
					usersRef,
					where("uid", "not-in", [authUser.uid, ...authUser.following]),
					orderBy("uid"),
					limit(3)
				);

				const querySnapshot = await getDocs(q);
				const users: UserData[] = [];

				querySnapshot.forEach((doc) => {
					const userData = doc.data() as unknown as UserData;
					users.push({ ...userData, id: doc.id });
				});

				setSuggestedUsers(users);
			} catch (error) {
				showToast("Error", (error as Error).message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		if (authUser) getSuggestedUsers();
	}, [authUser, showToast]);

	return { isLoading, suggestedUsers };
};

export default useGetSuggestedUsers;