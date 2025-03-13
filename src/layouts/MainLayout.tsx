
import React, { ReactNode, useState, useEffect } from "react";
import { Header } from "@/components/ui-custom/Header";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Terminal } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Helper function to copy the command to clipboard and show a message
  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    alert(`Command copied to clipboard: ${command}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <main 
        className={`fit-container py-8 transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </main>
      
      <footer className="fit-container py-8 text-center text-sm text-muted-foreground">
        <div className="mb-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => copyCommand("npx cap open ios")} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Apple size={16} />
            Open iOS Project
          </Button>
          
          <Button 
            onClick={() => copyCommand("npx cap open android")} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Smartphone size={16} />
            Open Android Project
          </Button>
          
          <Button 
            onClick={() => copyCommand("npx cap sync")} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Terminal size={16} />
            Sync Capacitor
          </Button>
        </div>
        <p>© {new Date().getFullYear()} FitTrack AI. All rights reserved.</p>
      </footer>
    </div>
  );
};
