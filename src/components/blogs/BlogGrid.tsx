import React from "react";
import { BlogPost } from "@/types";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  showFeatured?: boolean;
}

export const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  showFeatured = true,
}) => {
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
  const regularPosts = posts.filter((post) => !post.featured || !showFeatured);

  return (
    <div className="space-y-8">
      {showFeatured && featuredPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <BlogCard post={post} featured={index === 0} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        {showFeatured && (
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};
