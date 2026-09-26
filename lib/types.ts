export type MuscleGroup =
  | "Chest"
  | "Back"
  | "Legs"
  | "Shoulders"
  | "Arms"
  | "Core";

export interface Workout {
  slug: string;
  name: string;
  tags: MuscleGroup[];
  equipment: string;
  durationMin: number;
  calories: number;
  rating: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  sets: number;
  reps: string;
  description: string;
  instructions: string[];
}
