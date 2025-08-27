import { BlogCategory, BlogPost } from "@/types";

export const categories: BlogCategory[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Latest in tech innovation",
  },
  {
    id: "2",
    name: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Artificial intelligence developments",
  },
  {
    id: "3",
    name: "Gaming",
    slug: "gaming",
    description: "Gaming industry news",
  },
  {
    id: "4",
    name: "Gadgets",
    slug: "gadgets",
    description: "Latest gadgets and reviews",
  },
  {
    id: "5",
    name: "Science",
    slug: "science",
    description: "Scientific breakthroughs",
  },
  {
    id: "6",
    name: "Mobile",
    slug: "mobile",
    description: "Smartphones and mobile tech",
  },
];

export const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Apple Vision Pro Review: The Future of Spatial Computing is Here",
    excerpt:
      "After weeks of testing, we dive deep into Apple's groundbreaking mixed reality headset and what it means for the industry.",
    content:
      "The Apple Vision Pro represents a significant leap forward in spatial computing technology...",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
    },
    category: "Technology",
    tags: ["Apple", "VR", "AR", "Review"],
    publishedAt: "2024-03-15T10:00:00Z",
    readTime: 8,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "ChatGPT-5 Rumors: What We Know About OpenAI's Next Major Release",
    excerpt:
      "Industry insiders hint at revolutionary improvements coming to OpenAI's flagship language model.",
    content:
      "Recent reports suggest that ChatGPT-5 could be released as early as late 2024...",
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    category: "AI & Machine Learning",
    tags: ["OpenAI", "ChatGPT", "AI", "Machine Learning"],
    publishedAt: "2024-03-14T14:30:00Z",
    readTime: 6,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title:
      "PlayStation 5 Pro Officially Announced: Enhanced Gaming Performance",
    excerpt:
      "Sony unveils the PlayStation 5 Pro with 45% faster rendering and AI-powered upscaling technology.",
    content:
      "Sony has officially announced the PlayStation 5 Pro, featuring significant hardware improvements...",
    author: {
      name: "Marcus Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    category: "Gaming",
    tags: ["PlayStation", "Sony", "Gaming", "Console"],
    publishedAt: "2024-03-13T16:45:00Z",
    readTime: 5,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Samsung Galaxy S24 Ultra Camera Test: Night Photography Revolution",
    excerpt:
      "The S24 Ultra's new AI-powered camera system sets a new standard for mobile photography in low light conditions.",
    content:
      "Samsung's latest flagship phone includes revolutionary camera technology...",
    author: {
      name: "Lisa Park",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    category: "Mobile",
    tags: ["Samsung", "Galaxy", "Camera", "Photography"],
    publishedAt: "2024-03-12T09:15:00Z",
    readTime: 7,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title:
      "Tesla's New 4680 Battery Cells: 50% More Range, 20% Faster Charging",
    excerpt:
      "Tesla's latest battery technology promises to revolutionize electric vehicle performance and manufacturing costs.",
    content:
      "Tesla has begun mass production of their revolutionary 4680 battery cells...",
    author: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    category: "Technology",
    tags: ["Tesla", "Electric Vehicle", "Battery", "Innovation"],
    publishedAt: "2024-03-11T13:20:00Z",
    readTime: 6,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Microsoft Copilot Pro vs ChatGPT Plus: AI Assistant Showdown",
    excerpt:
      "We compare the two leading AI assistants to help you decide which subscription is worth your money.",
    content: "Both Microsoft and OpenAI offer premium AI assistant services...",
    author: {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    },
    category: "AI & Machine Learning",
    tags: ["Microsoft", "OpenAI", "AI", "Comparison"],
    publishedAt: "2024-03-10T11:30:00Z",
    readTime: 9,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop",
  },
  // ... continuing with more mock data to reach 30+ posts
  {
    id: "7",
    title:
      "Nintendo Switch 2: Everything We Know About the Next Generation Console",
    excerpt:
      "Leaks and rumors point to a 2024 release for Nintendo's highly anticipated Switch successor.",
    content: "Nintendo has remained tight-lipped about their next console...",
    author: {
      name: "Jake Wilson",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    },
    category: "Gaming",
    tags: ["Nintendo", "Switch", "Console", "Gaming"],
    publishedAt: "2024-03-09T15:45:00Z",
    readTime: 5,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
  },
  {
    id: "8",
    title: "Google Pixel 8a Hands-On: Budget Phone with Flagship Features",
    excerpt:
      "Google's latest mid-range phone brings premium AI features at an affordable price point.",
    content:
      "The Pixel 8a continues Google's tradition of offering excellent value...",
    author: {
      name: "Maria Santos",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    category: "Mobile",
    tags: ["Google", "Pixel", "Android", "Budget"],
    publishedAt: "2024-03-08T08:00:00Z",
    readTime: 4,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop",
  },
  {
    id: "9",
    title: "MacBook Pro M4: Apple's Most Powerful Laptop Yet",
    excerpt:
      "The new MacBook Pro with M4 chip delivers unprecedented performance for creative professionals.",
    content:
      "Apple's latest MacBook Pro features the groundbreaking M4 chip...",
    author: {
      name: "Ryan Lee",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    category: "Technology",
    tags: ["Apple", "MacBook", "M4", "Laptop"],
    publishedAt: "2024-03-07T12:00:00Z",
    readTime: 7,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=400&fit=crop",
  },
  {
    id: "10",
    title: "Meta Quest 3S: Affordable VR Gaming for Everyone",
    excerpt:
      "Meta's new budget VR headset brings immersive gaming experiences to a wider audience.",
    content:
      "The Quest 3S represents Meta's push to make VR more accessible...",
    author: {
      name: "Sophie Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
    },
    category: "Gaming",
    tags: ["Meta", "VR", "Quest", "Gaming"],
    publishedAt: "2024-03-06T14:15:00Z",
    readTime: 6,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=400&fit=crop",
  },
  // Adding more posts to reach 30+...
];
