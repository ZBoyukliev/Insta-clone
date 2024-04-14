import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    createPost: (post: any) => set((state: any) => ({ posts: [post, ...state.posts] })),
    deletePost: (id: any) => set((state: any) => ({ posts: state.posts.filter((post: any) => post.id !== id) })),
    setPosts: (posts: any) => set({ posts }),
    addComment: (postId: any, comment: any) =>
        set((state: any) => ({
            posts: state.posts.map((post: any) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, comment],
                    };
                }
                return post;
            }),
        })),
}));

export default usePostStore;