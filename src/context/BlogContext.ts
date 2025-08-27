import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BlogPost } from '@/types/blog';
import { allBlogs } from '@/data/mockBlogs';

interface BlogContextType {
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id'>) => void;
  updateBlog: (id: string, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;
  searchBlogs: (query: string) => BlogPost[];
  filterByCategory: (category: string) => BlogPost[];
  featuredBlogs: BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(allBlogs);

  const addBlog = (blogData: Omit<BlogPost, 'id'>) => {
    const newBlog: BlogPost = {
      ...blogData,
      id: Date.now().toString(),
    };
    setBlogs(prev => [newBlog, ...prev]);
  };

  const updateBlog = (id: string, updates: Partial<BlogPost>) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === id ? { ...blog, ...updates } : blog
    ));
  };

  const deleteBlog = (id: string) => {
    setBlogs(prev => prev.filter(blog => blog.id !== id));
  };

  const searchBlogs = (query: string): BlogPost[] => {
    return blogs.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const filterByCategory = (category: string): BlogPost[] => {
    return blogs.filter(blog => blog.category === category);
  };

  const featuredBlogs = blogs.filter(blog => blog.featured);

  const value: BlogContextType = {
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    searchBlogs,
    filterByCategory,
    featuredBlogs,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};