/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { FieldValues } from "react-hook-form";
import { createPost, getAllPosts, getSinglePost } from "@/services/BlogServices";

// GET all posts
export const useGetAllPostsQuery = () => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-all-posts"],
    queryFn: async () => await getAllPosts(),
  });

  return { data, refetch, isLoading, isError };
};

// GET single post
export const useGetSinglePostQuery = (postId: string) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-single-post", postId],
    queryFn: async () => await getSinglePost(postId),
    enabled: Boolean(postId),
  });

  return { data, refetch, isLoading, isError };
};

// CREATE post
export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["create-post"],
    mutationFn: async (postData) => {
      return await createPost(postData as any);
    },
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["get-all-posts"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create post.");
    },
  });
};
