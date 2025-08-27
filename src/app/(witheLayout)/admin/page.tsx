/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  BarChart3,
  Users,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/types";
import { mockBlogs } from "@/data/data";
import { BlogForm } from "@/components/admin/BlogForm";

import { toast } from "sonner";
import { useCreatePostMutation } from "@/hooks/Blog.hook";

const AdminDashboard: React.FC = () => {
  const blogs = mockBlogs;

  const [searchQuery, setSearchQuery] = useState("");
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { mutate: createPost, isPending: isCreating } = useCreatePostMutation();

  const filteredBlogs = blogs.filter(
    (blog: BlogPost) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleCreateSubmit = (blogData: any) => {
    console.log("Creating blog:", blogData);
    createPost(blogData, {
      onError: (err: any) => toast.error(err.message || "Create failed"),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your blog posts and content
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-400">
            <TabsTrigger value="posts">Manage Posts</TabsTrigger>
            <TabsTrigger value="create">Create New</TabsTrigger>
          </TabsList>

          {/* Posts */}
          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Blog list */}
            <div className="grid gap-4">
              {filteredBlogs.map((blog: BlogPost) => (
                <Card key={blog.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-4">
                        <Image
                          height={80}
                          width={80}
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">
                            {blog.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline">{blog.category}</Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(blog.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {blog.readTime} min read
                            </span>
                            {blog.featured && (
                              <Badge variant="default">Featured</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Create New */}
          <TabsContent value="create">
            <BlogForm
              editingBlog={null}
              onClose={() => {}}
              onSubmit={handleCreateSubmit}
              isLoading={isCreating}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
