import React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { mockBlogs } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "@/components/sidebar/Sidebar";

const BlogPost: React.FC = () => {
  const id = "1"; // Replace with dynamic ID from route params
  const blogs = mockBlogs;

  const post = blogs.find((blog) => blog.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you are looking for doesnot exist.
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <main className="lg:col-span-3">
            <article className="max-w-4xl">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Link>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary text-primary-foreground"
                    >
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge
                        variant="outline"
                        className="bg-electric text-white border-electric"
                      >
                        Featured
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    {post.title}
                  </h1>

                  <p className="text-xl text-muted-foreground mb-8">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between py-4 border-y">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>

                <div className="relative">
                  <Image
                    height={480}
                    width={960}
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-96 object-cover rounded-xl shadow-card"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">
                    {post.content}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-8">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </main>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
