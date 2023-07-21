import { GetStaticProps, GetStaticPaths } from "next";

import { Header } from "@/components/containers/Header";

import { supabase } from "@/utils/supabase";

import { BlogPostType } from "../../types/BlogPostType";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await supabase.from("blog_posts").select("id");

  if (data === null) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = context.params?.postId;

  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", postId)
    .single();

  const blogPost = data as BlogPostType;

  return {
    props: {
      blogPost,
    },
  };
};

const Post = ({ blogPost }: { blogPost: BlogPostType }) => {
  return (
    <>
      <Header body={blogPost.title} />
    </>
  );
};

export default Post;
