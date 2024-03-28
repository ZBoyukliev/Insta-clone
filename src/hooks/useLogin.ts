import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore,  {User} from "../store/authStore";

interface LoginInputs {
  email: string;
  password: string;
}

const useLogin = () => {
	const showToast = useShowToast();
	const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => (state as { login: (user: User) => void }).login);

	const login = async (inputs: LoginInputs) => {
		if (!inputs.email || !inputs.password) {
			return showToast("Error", "Please fill all the fields", "error");
		}
		try {
			const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

			if (userCred) {
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const userData = docSnap.data() as User; // Cast the data to User type
					localStorage.setItem("user-info", JSON.stringify(userData));
					loginUser(userData);
				} else {
					showToast("Error", "No user data found", "error");
				}
			}
		} catch (error: any) {
			showToast("Error", error.message, "error");
		}
	};

	return { loading, error, login };
};

export default useLogin;
