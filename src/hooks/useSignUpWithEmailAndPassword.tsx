import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

interface SignUpInputs {
  email: string;
  password: string;
  username: string;
  fullName: string;
}

const useSignUpWithEmailAndPassword = () => {
	const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
	

	const signup = async (inputs: SignUpInputs) => {
		if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
			console.log("Error", "Please fill all the fields", "error");
			return;
		}

		try {
			const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser && error) {
				console.log("Error", error.message, "error");
				return;
			}
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
			}
		} catch (error) {
			console.log(error)
		}
	};

	return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;