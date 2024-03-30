import { Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore"; // Removed UserState type import
import { doc, getDoc, setDoc } from "firebase/firestore";

interface GoogleAuthProps {
  prefix: string;
}

const GoogleAuth = ({ prefix }: GoogleAuthProps) => {
  const [signInWithGoogle, , , signInError] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  // const loginUser = useAuthStore((state) => (state as { user: User}).user);
  const loginUser = useAuthStore((state: any) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithGoogle();
      if (!result || signInError) {
        showToast(
          "Error",
          signInError ? signInError.message : "An error occurred",
          "error"
        );
        return;
      }
      const newUser = result.user;
      const userRef = doc(firestore, "users", newUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // login
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      } else {
        // signup
        const userDoc = {
          uid: newUser.uid,
          email: newUser.email,
          username: newUser.email ? newUser.email.split("@")[0] : "",
          fullName: newUser.displayName,
          bio: "",
          profilePicURL: newUser.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(userRef, userDoc); // Adjusted to use userRef and corrected setDoc usage
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      if (error instanceof Error) showToast("Error", error.message, "error"); // Adjusted to correctly handle error type
    }
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      onClick={handleGoogleAuth}
    >
      <Image src="/google.png" h={5} alt="Google logo" />
      <Text mx={2} color={"blue.400"}>
        {prefix} with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
