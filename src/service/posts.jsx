import * as postsAPI from "../api/posts";

export async function submitPost(postData) {
    const Data = await postsAPI.createPost(postData);
    return Data;
  }

export async function updatePost(postId, postData, userId) {
  try {
    const updatedData = await postsAPI.updatePost(postId, postData, userId);
    return updatedData;
  } catch (error) {
    console.error("Error updating post: ", error);
    throw error;
  }
}

export async function deletePost(postId, userId) {
  try {
    const response = await postsAPI.deletePost(postId, userId);
    return response;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}