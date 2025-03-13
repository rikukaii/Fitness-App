import React, { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/Card";
import { Button } from "@/components/ui-custom/Button";
import { Dashboard } from "@/components/Dashboard";
import { ProfileSetup } from "@/components/ProfileSetup";

const Index = () => {
  const [view, setView] = useState<"landing" | "profile" | "dashboard">("landing");
  
  const handleGetStarted = () => {
    setView("profile");
  };
  
  const handleProfileComplete = () => {
    setView("dashboard");
  };
  
  return (
    <MainLayout>
      {view === "landing" && (
        <div className="flex flex-col items-center justify-center py-12 animate-fade-up">
          <div className="text-center max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1">
              <span className="text-xs font-semibold text-fit-indigo">AI-Powered Fitness</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
              Your Personal <span className="text-primary">AI Fitness Coach</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Personalized diet plans, custom workouts, and real-time progress tracking, all powered by AI. Get started today and transform your fitness journey.
            </p>
            
            <Button size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Card className="animate-fade-in animate-delay-100">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <CardTitle>AI Meal Planning</CardTitle>
                <CardDescription>
                  Personalized meal plans based on your dietary preferences and fitness goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Automatic calorie tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Balanced macronutrients
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dietary preferences respected
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in animate-delay-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M18 8a5 5 0 0 0-10 0v7h10V8Z" />
                    <path d="M8 15v2a5 5 0 0 0 10 0v-2" />
                    <path d="M18 8a5 5 0 0 0-10 0" />
                    <path d="M8 8v7" />
                    <path d="m6 13 3-3" />
                    <path d="m15 13 3-3" />
                  </svg>
                </div>
                <CardTitle>Custom Workouts</CardTitle>
                <CardDescription>
                  Tailored workout plans based on your fitness level and goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Progressive overload system
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Exercise demonstrations
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Weekly adaptations
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in animate-delay-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Real-time tracking of your fitness progress with data visualization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Weight and body measurements
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Workout performance
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-4 w-4 text-fit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    AI-powered insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      
      {view === "profile" && <ProfileSetup onComplete={handleProfileComplete} />}
      
      {view === "dashboard" && <Dashboard />}
    </MainLayout>
  );
};

export default Index;
