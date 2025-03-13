
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui-custom/Card";
import { ProgressCircle } from "./ui-custom/ProgressCircle";
import { MacroTracker } from "./ui-custom/MacroTracker";
import { WorkoutCard, Exercise } from "./ui-custom/WorkoutCard";
import { MealCard, Food } from "./ui-custom/MealCard";
import { AIAssistant } from "./ui-custom/AIAssistant";

export const Dashboard: React.FC = () => {
  // Sample data - in a real app, this would come from an API or state management
  const calorieData = {
    current: 1850,
    target: 2200,
  };
  
  const macroData = [
    {
      name: "Protein",
      current: 120,
      target: 150,
      unit: "g",
      color: "bg-fit-purple",
    },
    {
      name: "Carbs",
      current: 180,
      target: 220,
      unit: "g",
      color: "bg-fit-blue",
    },
    {
      name: "Fat",
      current: 55,
      target: 70,
      unit: "g",
      color: "bg-fit-yellow",
    },
  ];
  
  const workoutData: Exercise[] = [
    { name: "Barbell Squat", sets: 4, reps: 8, weight: 100 },
    { name: "Bench Press", sets: 4, reps: 10, weight: 80 },
    { name: "Deadlift", sets: 3, reps: 6, weight: 120 },
    { name: "Pull Ups", sets: 3, reps: 12 },
  ];
  
  const mealData: Food[] = [
    { name: "Grilled Chicken Breast", amount: "150g", calories: 250, protein: 35, carbs: 0, fat: 6 },
    { name: "Basmati Rice", amount: "100g", calories: 130, protein: 3, carbs: 28, fat: 0 },
    { name: "Broccoli", amount: "100g", calories: 55, protein: 4, carbs: 11, fat: 0 },
    { name: "Olive Oil", amount: "1 tbsp", calories: 120, protein: 0, carbs: 0, fat: 14 },
  ];
  
  const waterData = {
    current: 6,
    target: 8,
  };
  
  const sleepData = {
    current: 7.5,
    target: 8,
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MacroTracker
          calories={calorieData}
          macros={macroData}
          className="md:col-span-2"
        />
        
        <Card>
          <CardHeader>
            <CardTitle>Today's Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around">
            <ProgressCircle
              value={waterData.current}
              max={waterData.target}
              label="Water (L)"
              color="text-fit-blue"
              size={100}
            />
            <ProgressCircle
              value={sleepData.current}
              max={sleepData.target}
              label="Sleep (hrs)"
              color="text-fit-indigo"
              size={100}
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WorkoutCard
          title="Today's Workout"
          description="Strength Training - Upper Body"
          exercises={workoutData}
          className="md:col-span-1"
          onStart={() => console.log("Starting workout")}
        />
        
        <MealCard
          title="Next Meal"
          time="12:30 PM - Lunch"
          foods={mealData}
          className="md:col-span-1"
        />
        
        <AIAssistant className="md:col-span-1 md:h-[400px]" />
      </div>
    </div>
  );
};
