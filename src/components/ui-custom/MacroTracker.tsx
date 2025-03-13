
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { cn } from "@/lib/utils";

interface MacroNutrient {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

interface MacroTrackerProps {
  calories: {
    current: number;
    target: number;
  };
  macros: MacroNutrient[];
  className?: string;
}

export const MacroTracker: React.FC<MacroTrackerProps> = ({
  calories,
  macros,
  className,
}) => {
  const caloriePercentage = Math.min(100, (calories.current / calories.target) * 100);
  
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Daily Nutrition</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Calories</span>
            <span className="text-sm font-medium">
              {calories.current} / {calories.target} kcal
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-fit-blue transition-all duration-500 ease-out"
              style={{ width: `${caloriePercentage}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {macros.map((macro, index) => {
            const percentage = Math.min(100, (macro.current / macro.target) * 100);
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">{macro.name}</span>
                  <span className="text-xs">
                    {macro.current}/{macro.target}
                    <span className="text-muted-foreground ml-1">{macro.unit}</span>
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${macro.color}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
