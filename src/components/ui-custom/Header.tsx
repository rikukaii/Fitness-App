
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-subtle" 
          : "bg-transparent"
      }`}
    >
      <div className="fit-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-lg bg-primary p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="h-5 w-5 text-primary-foreground"
            >
              <path d="M18 8a5 5 0 0 0-10 0v7h10V8Z" />
              <path d="M8 15v2a5 5 0 0 0 10 0v-2" />
              <path d="M18 8a5 5 0 0 0-10 0" />
              <path d="M8 8v7" />
              <path d="m6 13 3-3" />
              <path d="m15 13 3-3" />
            </svg>
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            FitTrack <span className="text-primary">AI</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
