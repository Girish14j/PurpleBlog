import Navbar from "@/components/Navbar";
import type { BlogPost } from "@/utils/blogutils";
import { getBlogsFromLocalStorage, saveBlogsToLocalStorage } from "@/utils/blogutils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BlogForm from "@/components/BlogForm";

const CreatePost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<BlogPost>) => {
    setIsSubmitting(true);

    try {
      const existingBlogs = getBlogsFromLocalStorage();
      
      const newBlog: BlogPost = {
        id: crypto.randomUUID(),
        title: data.title || '',
        content: data.content || '',
        author: data.author || '',
        category: data.category || '',
        coverImage: data.coverImage || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      const updatedBlogs = [newBlog, ...existingBlogs];
      saveBlogsToLocalStorage(updatedBlogs);
      
      toast.success("Post created successfully!");
      navigate(`/post/${newBlog.id}`, { replace: true });
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="blog-container max-w-3xl mx-auto animate-fade-in">
        <h1 className="mb-6">Create New Post</h1>
        <BlogForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </>
  );
};

export default CreatePost;
