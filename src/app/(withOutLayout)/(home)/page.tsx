import React from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { BlogGrid } from "@/components/blogs/BlogGrid";
import { AdBanner } from "@/components/banner/Banner";
import { useBlog } from "@/context/BlogContext";
import { mockBlogs } from "@/data/data";

const BlogHome: React.FC = () => {
  const blogs = mockBlogs;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Ad Banner */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner size="large" position="header" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <main className="lg:col-span-3">
            <BlogGrid posts={blogs} showFeatured={true} />
          </main>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>

      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 TechBlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogHome;
