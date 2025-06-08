import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { type BlogPost, getAllCategories, getBlogsFromLocalStorage, filterByCategory } from "../utils/blogutils";
import { Badge } from "../components/ui/badge";
import BlogCard from "../components/BlogCard";
import { toast } from "sonner";

const Categories = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = () => {
      try {
        const savedBlogs = getBlogsFromLocalStorage();
        setBlogs(savedBlogs);
        setFilteredBlogs(savedBlogs);
        
        const allCategories = getAllCategories(savedBlogs);
        setCategories(allCategories);
      } catch (error) {
        console.error("Error loading blogs:", error);
        toast.error("Failed to load blogs");
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBlogs(filterByCategory(blogs, selectedCategory));
    } else {
      setFilteredBlogs(blogs);
    }
  }, [selectedCategory, blogs]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  return (
    <>
      <Navbar />
      <div className="blog-container animate-fade-in">
        <h1 className="mb-8 text-center">Browse by Category</h1>
        
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === selectedCategory ? "default" : "outline"}
              className="cursor-pointer text-sm py-1 px-3"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="h-[300px] bg-muted animate-pulse rounded-md"></div>
            ))}
          </div>
        ) : filteredBlogs.length > 0 ? (
          <>
            <h2 className="mb-6 text-xl font-medium">
              {selectedCategory ? `Posts in ${selectedCategory}` : 'All Posts'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} post={blog} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium mb-2">No posts found</h2>
            <p className="text-muted-foreground">
              {blogs.length === 0
                ? "Start by creating your first blog post!"
                : `No posts in the category ${selectedCategory}`}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;