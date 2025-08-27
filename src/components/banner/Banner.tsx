import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AdBannerProps {
  size: "large" | "medium" | "small";
  position: "sidebar" | "header" | "content";
}

export const AdBanner: React.FC<AdBannerProps> = ({ size, position }) => {
  const getAdContent = () => {
    switch (size) {
      case "large":
        return {
          title: "Boost Your Tech Skills",
          description:
            "Join thousands of developers learning cutting-edge technologies. Start your journey today!",
          cta: "Start Learning",
          height: "h-64",
        };
      case "medium":
        return {
          title: "Premium Tech Tools",
          description:
            "Get 50% off on professional development tools this month only.",
          cta: "Claim Offer",
          height: "h-48",
        };
      case "small":
        return {
          title: "Tech Newsletter",
          description: "Weekly tech insights delivered to your inbox.",
          cta: "Subscribe",
          height: "h-32",
        };
    }
  };

  const ad = getAdContent();

  return (
    <Card
      className={`${ad.height} gradient-hero  transition-smooth hover:shadow-primary`}
    >
      <CardContent className="h-full flex flex-col justify-center items-center text-center p-6">
        <h3 className="font-bold text-lg mb-2">{ad.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{ad.description}</p>
        <Button size="sm">{ad.cta}</Button>
      </CardContent>
    </Card>
  );
};
