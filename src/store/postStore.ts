import { create, StateCreator } from "zustand";

interface Post {
    id: string;
    [key: string]: any; // Allow any additional properties
}

interface PostStore {
    posts: Post[];
    createPost: (post: any) => void;
    deletePost: (id: any) => void;
    setPosts: (posts: any) => void;
    addComment: (postId: any, comment: any) => void;
}

const usePostStore: StateCreator<PostStore> = (set) => ({
    posts: [],
    createPost: (post: any) => set((state) => ({ posts: [post, ...state.posts] })),
    deletePost: (id: any) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
    setPosts: (posts: any) => set({ posts }),
    addComment: (postId: any, comment: any) =>
        set((state) => ({
            posts: state.posts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, comment],
                    };
                }
                return post;
            }),
        })),
});

export default create(usePostStore);


// import { create, SetState  } from "zustand";

// interface Post {
//     id: string;
//     [key: string]: any;
// }

// interface PostStore {
//     posts: Post[];
//     createPost: (post: any) => void;
//     deletePost: (id: any) => void;
//     setPosts: (posts: any) => void;
//     addComment: (postId: any, comment: any) => void;
// }

// const usePostStore = create<PostStore>((set: SetState<PostStore>) => ({
//     posts: [],
//     createPost: (post: any) => set((state: any) => ({ posts: [post, ...state.posts] })),
//     deletePost: (id: any) => set((state: any) => ({ posts: state.posts.filter((post: any) => post.id !== id) })),
//     setPosts: (posts: any) => set({ posts }),
//     addComment: (postId: any, comment: any) =>
//         set((state: any) => ({
//             posts: state.posts.map((post: any) => {
//                 if (post.id === postId) {
//                     return {
//                         ...post,
//                         comments: [...post.comments, comment],
//                     };
//                 }
//                 return post;
//             }),
//         })),
// }));

// export default usePostStore;