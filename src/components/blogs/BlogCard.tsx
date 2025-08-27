/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  featured = false,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link href={`/blog/${post._id}`}>
      <Card
        className={`group cursor-pointer overflow-hidden transition-smooth hover:scale-105 shadow-card hover:shadow-primary ${
          featured ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        <div className="relative overflow-hidden">
          <Image
            height={featured ? 320 : 192}
            width={featured ? 640 : 384}
            src={post.imageUrl}
            alt={post.title}
            className={`w-full object-cover transition-smooth group-hover:scale-110 ${
              featured ? "h-64 md:h-80" : "h-48"
            }`}
          />
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-primary text-primary-foreground"
            >
              {post.category}
            </Badge>
          </div>
          {post.featured && (
            <div className="absolute top-4 right-4">
              <Badge
                variant="outline"
                className="bg-electric text-white "
              >
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <h2
            className={`font-bold leading-tight transition-smooth group-hover:text-primary ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </h2>
        </CardHeader>

        <CardContent className="space-y-4">
          <p
            className={`text-muted-foreground line-clamp-3 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag:any) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

        
        </CardContent>
      </Card>
    </Link>
  );
};
