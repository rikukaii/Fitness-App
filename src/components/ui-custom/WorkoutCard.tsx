
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./Card";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
}

interface WorkoutCardProps {
  title: string;
  description?: string;
  exercises: Exercise[];
  className?: string;
  onStart?: () => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  description,
  exercises,
  className,
  onStart,
}) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-border pb-2 last:border-0"
            >
              <div>
                <p className="font-medium text-sm">{exercise.name}</p>
                <p className="text-xs text-muted-foreground">
                  {exercise.sets} sets × {exercise.reps} reps
                  {exercise.weight && ` • ${exercise.weight} kg`}
                  {exercise.duration && ` • ${exercise.duration} min`}
                </p>
              </div>
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-xs font-medium">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <Button fullWidth onClick={onStart}>
          Start Workout
        </Button>
      </CardContent>
    </Card>
  );
};
