import { create } from "zustand";
import { User } from "./authStore";

interface Post {
  id: string;
};

const useUserProfileStore = create((set) => ({
	
	userProfile: null as User | null,
	setUserProfile: (userProfile: User) => set({ userProfile }),
	// this is used to update the number of posts in the profile page
	addPost: (post: Post) =>
		set((state: { userProfile: User }) => ({
			userProfile: { 
                ...state.userProfile, 
                posts: state.userProfile.posts ? [post.id, ...state.userProfile.posts] : [post.id],
            },
		})),

	deletePost: (postId: string) =>
		set((state: { userProfile: User }) => ({
			userProfile: {
				...state.userProfile,
				posts: state.userProfile.posts ? state.userProfile.posts.filter((id: string) => id !== postId) : [],
			},
		})),
}));

export default useUserProfileStore;