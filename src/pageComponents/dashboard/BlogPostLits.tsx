import { useState, useEffect } from "react";

import { BlogPost } from "./BlogPost";

import { supabase } from "@/utils/supabase";

import { BlogPostType } from "../../types/BlogPostType";

export const BlogPostList = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("blog_posts").select("*");

    if (error) {
      throw new Error(error.message);
    }

    const posts = data as BlogPostType[];
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          image_url={post.image_url}
        />
      ))}
    </>
  );
};
