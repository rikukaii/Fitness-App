
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { cn } from "@/lib/utils";

export interface Food {
  name: string;
  amount: string;
  calories: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

interface MealCardProps {
  title: string;
  time?: string;
  foods: Food[];
  className?: string;
}

export const MealCard: React.FC<MealCardProps> = ({
  title,
  time,
  foods,
  className,
}) => {
  const totalCalories = foods.reduce((acc, food) => acc + food.calories, 0);
  
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {time && <span className="text-sm text-muted-foreground">{time}</span>}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {foods.map((food, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-border pb-2 last:border-0"
          >
            <div>
              <p className="font-medium text-sm">{food.name}</p>
              <p className="text-xs text-muted-foreground">{food.amount}</p>
            </div>
            <div className="text-sm">
              {food.calories} kcal
            </div>
          </div>
        ))}
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium">Total</span>
          <span className="text-sm font-medium">{totalCalories} kcal</span>
        </div>
      </CardContent>
    </Card>
  );
};
