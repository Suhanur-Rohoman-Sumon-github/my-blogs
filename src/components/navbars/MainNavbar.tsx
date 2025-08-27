"use client";
import { categories } from "@/data/data";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, Search, Settings } from "lucide-react";
import { Input } from "../ui/input";

const MainNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white  shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TB</span>
            </div>
            <span className="text-xl font-bold">TechBlog</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {categories.slice(0, 5).map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <Button variant="ghost" size="sm">
                  {category.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Link href="/admin">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
