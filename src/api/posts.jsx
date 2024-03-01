// // REAL URL
const BASE_URL = "https://astro-odyssey-be.onrender.com/posts";
// TEST URL
// const BASE_URL = "http://localhost:3000/posts";

export async function createPost(postData) {
  const createURL = BASE_URL + '/create';
  const token = localStorage.getItem('token'); // Get the stored JWT token

  try {
    const res = await fetch(createURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Include the JWT token in the request
      },
      body: JSON.stringify(postData),
    });

    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.text();
      throw new Error(errorData);
    }
  } catch (error) {
    console.error("Error creating post: ", error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export async function getPost(postId) {

  const postURL = `${BASE_URL}/${postId}`;
  try {
    const response = await fetch(postURL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export async function getPostsSearch(query) {
  const searchURL = `${BASE_URL}/search?title=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(searchURL);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Rethrow to handle it in the calling component
  }
}

export async function updatePost(postId, postData, userId) {

  const updateURL = `${BASE_URL}/${postId}/edit?userId=${userId}`;
  const token = localStorage.getItem('token'); 

  try {
    const res = await fetch(updateURL, {
      method: "PUT", // or "PATCH" if you are using PATCH for partial updates
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Include the JWT token in the request
      },
      body: JSON.stringify(postData),
    });

    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.text();
      throw new Error(errorData);
    }
  } catch (error) {
    console.error("Error updating post: ", error);
    throw error;
  }
}

export async function deletePost(postId, userId) {
  const deleteURL = `${BASE_URL}/${postId}?userId=${userId}`;
  const token = localStorage.getItem('token'); 

  try {
    const response = await fetch(deleteURL, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}