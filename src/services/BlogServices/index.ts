"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(`https://blog-server-five-plum.vercel.app/api/v1/posts`);
    console.log(data);
    return data.data; // matches backend sendResponse
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch posts");
    }
    throw new Error(error.message);
  }
};

export const getSinglePost = async (postId: string) => {
  try {
    const { data } = await axios.get(`https://blog-server-five-plum.vercel.app/api/v1/posts/${postId}`);
    return data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch post");
    }
    throw new Error(error.message);
  }
};

export const createPost = async (postData: {
  title: string;
  content: string;
  author: string;
}) => {
  console.log(postData);
  try {
    const { data } = await axios.post(`https://blog-server-five-plum.vercel.app/api/v1/posts`, postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to create post");
    }
    throw new Error(error.message);
  }
};
