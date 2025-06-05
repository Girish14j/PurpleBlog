import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import type { BlogPost } from "../utils/blogutils";

interface BlogFormProps {
  initialData?: Partial<BlogPost>;
  onSubmit: (data: Partial<BlogPost>) => void;
  isSubmitting?: boolean;
}

const BlogForm = ({ initialData = {}, onSubmit, isSubmitting = false }: BlogFormProps) => {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    author: '',
    category: '',
    coverImage: '',
    ...initialData
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.content?.trim()) {
      newErrors.content = 'Content is required';
    }
    
    if (!formData.author?.trim()) {
      newErrors.author = 'Author name is required';
    }
    
    if (!formData.category?.trim()) {
      newErrors.category = 'Category is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter post title"
          className={errors.title ? 'border-destructive' : ''}
        />
        {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Your name"
            className={errors.author ? 'border-destructive' : ''}
          />
          {errors.author && <p className="text-sm text-destructive">{errors.author}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Technology, Travel, Food"
            className={errors.category ? 'border-destructive' : ''}
          />
          {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="coverImage">Cover Image URL</Label>
        <Input
          id="coverImage"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your blog post here..."
          className={`min-h-[200px] ${errors.content ? 'border-destructive' : ''}`}
        />
        {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
      </div>
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : initialData.id ? "Update Post" : "Create Post"}
      </Button>
    </form>
  );
};

export default BlogForm;
