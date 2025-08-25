import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import RotatingCircle from "@/components/RotatingCircle";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl font-black mb-4 gradient-text">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Button asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
      <RotatingCircle />
    </div>
  );
};

export default NotFound;
