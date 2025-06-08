import Navbar from "../components/Navbar";
import BlogForm from "../components/BlogForm";
import { type BlogPost, getBlogsFromLocalStorage, saveBlogsToLocalStorage } from "../utils/blogutils";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadPost = () => {
      try {
        const blogs = getBlogsFromLocalStorage();
        const foundPost = blogs.find((blog) => blog.id === id);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          toast.error("Post not found");
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Error loading post:", error);
        toast.error("Failed to load post");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadPost();
    }
  }, [id, navigate]);

  const handleSubmit = (data: Partial<BlogPost>) => {
    if (!id || !post) return;
    
    setIsSubmitting(true);
    
    try {
      const blogs = getBlogsFromLocalStorage();
      const postIndex = blogs.findIndex((blog) => blog.id === id);
      
      if (postIndex === -1) {
        toast.error("Post not found");
        return;
      }
      
      const updatedPost: BlogPost = {
        ...post,
        title: data.title || post.title,
        content: data.content || post.content,
        author: data.author || post.author,
        category: data.category || post.category,
        coverImage: data.coverImage || post.coverImage,
        updatedAt: new Date().toISOString(),
      };
      
      blogs[postIndex] = updatedPost;
      saveBlogsToLocalStorage(blogs);
      
      toast.success("Post updated successfully");
      navigate(`/post/${id}`);
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Failed to update post");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="blog-container max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-muted rounded mb-8"></div>
          <div className="h-6 bg-muted rounded mb-4"></div>
          <div className="h-12 bg-muted rounded mb-6"></div>
          <div className="h-6 bg-muted rounded mb-4"></div>
          <div className="h-40 bg-muted rounded"></div>
        </div>
      </>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="blog-container max-w-3xl mx-auto animate-fade-in">
        <h1 className="mb-6">Edit Post</h1>
        <BlogForm 
          initialData={post} 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting}
        />
      </div>
    </>
  );
};

export default EditPost;
