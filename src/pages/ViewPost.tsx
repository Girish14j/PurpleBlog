import Navbar from "@/components/Navbar";
import type { BlogPost } from "@/utils/blogutils";
import { formatDate, getBlogsFromLocalStorage, saveBlogsToLocalStorage } from "@/utils/blogutils";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import DeleteDialog from "@/components/DeleteDialog";

const ViewPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleDelete = () => {
    try {
      const blogs = getBlogsFromLocalStorage();
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      saveBlogsToLocalStorage(updatedBlogs);
      toast.success("Post deleted successfully");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="blog-container max-w-3xl mx-auto animate-fade-in">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-muted rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
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
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Button variant="ghost" size="sm" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to Posts
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Link to={`/edit/${post.id}`}>
                <Button variant="outline" size="sm" className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                  Edit
                </Button>
              </Link>
              <DeleteDialog onDelete={handleDelete} />
            </div>
          </div>
          <h1>{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.createdAt)}</span>
            {post.category && (
              <>
                <span>•</span>
                <span className="text-primary">{post.category}</span>
              </>
            )}
          </div>
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          )}
          <div className="whitespace-pre-wrap">{post.content}</div>
        </article>
      </div>
    </>
  );
};

export default ViewPost;
