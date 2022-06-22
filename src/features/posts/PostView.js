import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../posts/postSlice";

export default function PostView() {
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  const dispatch = useDispatch();
  return (
    <div>
      {isLoading && <h3>Loading</h3>}
      {error && <h3>{error}</h3>}
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
}
