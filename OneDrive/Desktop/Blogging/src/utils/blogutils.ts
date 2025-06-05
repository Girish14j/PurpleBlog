export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
}

// Save blogs to local storage
export const saveBlogsToLocalStorage = (blogs: BlogPost[]): void => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
};

// Get blogs from local storage
export const getBlogsFromLocalStorage = (): BlogPost[] => {
  const blogsJson = localStorage.getItem('blogs');
  if (!blogsJson) return [];
  try {
    return JSON.parse(blogsJson);
  } catch (error) {
    console.error('Error parsing blogs from localStorage:', error);
    return [];
  }
};

// Generate snippet from blog content
export const generateSnippet = (content: string, maxLength: number = 100): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength).trim() + '...';
};

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Get all categories from blogs
export const getAllCategories = (blogs: BlogPost[]): string[] => {
  const categories = blogs.map(blog => blog.category);
  return [...new Set(categories)];
};

// Filter blogs by category
export const filterByCategory = (blogs: BlogPost[], category: string): BlogPost[] => {
  if (!category) return blogs;
  return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
};

// Search blogs by title or content
export const searchBlogs = (blogs: BlogPost[], query: string): BlogPost[] => {
  if (!query) return blogs;
  const lowerCaseQuery = query.toLowerCase();
  return blogs.filter(blog => 
    blog.title.toLowerCase().includes(lowerCaseQuery) || 
    blog.content.toLowerCase().includes(lowerCaseQuery) ||
    blog.category.toLowerCase().includes(lowerCaseQuery)
  );
};
