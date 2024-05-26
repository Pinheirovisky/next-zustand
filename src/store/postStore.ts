import { Post } from "@/types";
import { create } from "zustand";

type PostStore = {
  posts: Post[];
  add: (post: Post) => void;
};

export const usePostStore = create<PostStore>()((set) => ({
  posts: [],
  add: (post: Post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
}));
