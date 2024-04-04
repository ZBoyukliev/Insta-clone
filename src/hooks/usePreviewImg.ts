import { useState, ChangeEvent } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
	const [selectedFile, setSelectedFile] = useState<string | null>(null);
	const showToast = useShowToast();
	const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files ? e.target.files[0] : null;
		if (file && file.type.startsWith("image/")) {
			if (file.size > maxFileSizeInBytes) {
				showToast("Error", "File size must be less than 2MB", "error");
				setSelectedFile(null);
				return;
			}
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result as string);
			};

			reader.readAsDataURL(file);
		} else {
			showToast("Error", "Please select an image file", "error");
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
