import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import { type BlogPost, getBlogsFromLocalStorage, searchBlogs } from "../utils/blogutils";
import { toast } from 'sonner';

const Index = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load blogs from local storage
    const loadBlogs = () => {
      try {
        const savedBlogs = getBlogsFromLocalStorage();
        setBlogs(savedBlogs);
        setFilteredBlogs(savedBlogs);
      } catch (error) {
        console.error("Error loading blogs:", error);
        toast.error("Failed to load blogs. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const handleSearch = (query: string) => {
    setFilteredBlogs(searchBlogs(blogs, query));
  };

  return (
    <>
      <Navbar onSearch={handleSearch} showSearch={true} />
      <div className="blog-container animate-fade-in">
        <h1 className="mb-8 text-center">Latest Posts</h1>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="h-[300px] bg-muted animate-pulse rounded-md"></div>
            ))}
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium mb-2">No posts found</h2>
            <p className="text-muted-foreground mb-6">
              {blogs.length === 0
                ? "Start by creating your first blog post!"
                : "Try adjusting your search terms."}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
