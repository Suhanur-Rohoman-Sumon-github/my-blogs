import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Users } from "lucide-react";
import Image from "next/image";
import { AdBanner } from "../banner/Banner";
import { BlogPost } from "@/types";
import { categories, mockBlogs } from "@/data/data";

export const Sidebar: React.FC = () => {
  const popularTags = [
    "AI",
    "Technology",
    "Gaming",
    "Mobile",
    "Innovation",
    "Review",
    "Apple",
    "Google",
  ];
  const recentPosts = mockBlogs.slice(0, 5);

  return (
    <aside className="space-y-6">
      {/* Advertisement */}
      <AdBanner size="medium" position="sidebar" />

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              size="sm"
              className="w-full justify-start"
            >
              {category.name}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Popular Tags</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Recent Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post: BlogPost) => (
            <div key={post.id} className="flex space-x-3 group cursor-pointer">
              <Image
                height={64}
                width={64}
                src={post.imageUrl}
                alt={post.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-smooth">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Another Ad */}
      <AdBanner size="small" position="sidebar" />
    </aside>
  );
};
