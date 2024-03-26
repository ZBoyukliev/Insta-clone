import { useToast } from "@chakra-ui/react";

const useShowToast = () => {
	const toast = useToast();

	// useCallback is used to prevent infinite loop, by  caching the function
	const showToast = (
		(title: string, description: string, status: "info" | "warning" | "success" | "error") => {
			toast({
				title: title,
				description: description,
				status: status,
				duration: 3000,
				isClosable: true,
			});
		}
	);

	return showToast;
};

export default useShowToast;