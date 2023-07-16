import { useState, useEffect } from "react";

import { BlogPost } from "./BlogPost";

import { supabase } from "@/utils/supabase";

type BlogPost = {
  id: string;
  title: string;
  description: string;
  image_url: string;
};

export const BlogPostList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const fetchPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*");
    const posts = data as BlogPost[];
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
