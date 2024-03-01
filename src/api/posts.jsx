const modelPosts = require("../models/posts");
const modelUsers = require("../models/users");

module.exports = {
  createPost,
  getPosts,
  searchPosts,
  getPost,
  updatePost,
  deletePost,
};

async function createPost(req, res) {
  try {
    const postData = req.body;

    // Validate userId
    const user = await modelUsers.getUser(postData.userId);
    if (!user) {
      return res.status(400).json({ errorMsg: "Invalid user ID" });
    }

    const post = await modelPosts.createPost(postData);
    res.status(201).json(post); // Return the created post
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getPosts(req, res) {
  try {
    const posts = await modelPosts.getPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function searchPosts(req, res) {
  try {
    // Check if there's a 'title' query parameter
    const query = {};
    if (req.query.title) {
      // Add a filter for title using a case-insensitive regex search
      query.title = { $regex: req.query.title, $options: 'i' };
    }
    if (req.query.type) {
      query.type = req.query.type; // Direct match for type
    }

    // Pass the query object to your model's find method
    const posts = await modelPosts.getSearchPosts(query); // Ensure your model's getPosts method can accept a query object

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getPost(req, res) {
  try {
    const postId = req.params.postId;
    const post = await modelPosts.getPost(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updatePost(req, res) {
  try {
    const postId = req.params.postId;
    const updateData = req.body;
    const userId = req.user._id;

    const post = await modelPosts.getPost(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId.toString() !== userId && !req.user.is_admin) {
      return res
        .status(403)
        .json({
          message: "Forbidden: User not authorized to update this post",
        });
    }

    const updatedPost = await modelPosts.updatePost(postId, updateData);
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function deletePost(req, res) {
  try {
    const postId = req.params.postId;
    const userId = req.user._id;

    const post = await modelPosts.getPost(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId.toString() !== userId && !req.user.is_admin) {
      return res
        .status(403)
        .json({
          message: "Forbidden: User not authorized to delete this post",
        });
    }

    await modelPosts.deletePost(postId);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ errorMsg: err.message });
  }
}