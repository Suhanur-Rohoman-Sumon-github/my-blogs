export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
  imageUrl: string;
  _id: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}