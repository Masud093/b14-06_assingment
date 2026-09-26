import { Workout } from "./types";

// NOTE: The Figma file's "3x4 Grid of Workouts" only contained 10 distinct
// exercises even though the section subtitle says "Twelve lifts." The
// remaining grid slots were duplicates of "Dumbbell Bicep Curl." The two
// entries marked below were added to fill out the stated count of twelve
// and should be reviewed/replaced with real content.
export const workouts: Workout[] = [
  {
    slug: "barbell-bench-press",
    name: "Barbell Bench Press",
    tags: ["Chest", "Arms"],
    equipment: "Barbell, Bench",
    durationMin: 25,
    calories: 180,
    rating: 4.8,
    difficulty: "Intermediate",
    sets: 4,
    reps: "6-10",
    description:
      "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    instructions: [
      "Lie on the bench with eyes under the bar and feet flat on the floor.",
      "Grip the bar slightly wider than shoulder width and unrack it over your chest.",
      "Lower the bar with control to mid-chest, keeping elbows at roughly 45 degrees.",
      "Press back up to full lock-out without bouncing the bar off your chest.",
    ],
  },
  {
    slug: "pull-up",
    name: "Pull-up",
    tags: ["Back", "Arms"],
    equipment: "Pull-up Bar",
    durationMin: 15,
    calories: 120,
    rating: 4.7,
    difficulty: "Intermediate",
    sets: 4,
    reps: "AMRAP",
    description:
      "A bodyweight staple that builds a wider back and stronger grip using nothing but a bar.",
    instructions: [
      "Hang from the bar with an overhand grip just outside shoulder width.",
      "Brace your core and pull your chest toward the bar.",
      "Lead with your chest and keep elbows driving down and back.",
      "Lower under control to a full hang before the next rep.",
    ],
  },
  {
    slug: "back-squat",
    name: "Back Squat",
    tags: ["Legs", "Core"],
    equipment: "Barbell, Rack",
    durationMin: 30,
    calories: 240,
    rating: 4.9,
    difficulty: "Advanced",
    sets: 5,
    reps: "5",
    description:
      "The foundational lower-body lift for building leg and core strength under load.",
    instructions: [
      "Set the bar across your upper back and unrack it with a tight brace.",
      "Step back, feet shoulder width, toes slightly turned out.",
      "Sit down and back, keeping your chest up until hips drop below knee level.",
      "Drive through the floor to stand, keeping the bar path vertical.",
    ],
  },
  {
    slug: "overhead-press",
    name: "Overhead Press",
    tags: ["Shoulders", "Arms"],
    equipment: "Barbell",
    durationMin: 20,
    calories: 150,
    rating: 4.6,
    difficulty: "Intermediate",
    sets: 4,
    reps: "6-8",
    description:
      "A standing press that builds shoulder strength and total-body bracing from the ground up.",
    instructions: [
      "Hold the bar at shoulder height with a firm, shoulder-width grip.",
      "Brace your core and glutes before you press.",
      "Press the bar straight up, moving your head back slightly to clear it.",
      "Lock out overhead with the bar over your mid-foot, then lower with control.",
    ],
  },
  {
    slug: "dumbbell-bicep-curl",
    name: "Dumbbell Bicep Curl",
    tags: ["Arms"],
    equipment: "Dumbbells",
    durationMin: 12,
    calories: 80,
    rating: 4.3,
    difficulty: "Beginner",
    sets: 3,
    reps: "10-12",
    description:
      "An isolation move for building arm size and finishing off an upper-body session.",
    instructions: [
      "Stand tall holding a dumbbell in each hand, arms fully extended.",
      "Curl the weights up while keeping your elbows pinned to your sides.",
      "Squeeze at the top without swinging your shoulders.",
      "Lower slowly back to the starting position.",
    ],
  },
  {
    slug: "hollow-body-plank",
    name: "Hollow-Body Plank",
    tags: ["Core"],
    equipment: "Bodyweight",
    durationMin: 10,
    calories: 60,
    rating: 4.4,
    difficulty: "Beginner",
    sets: 3,
    reps: "30-45s",
    description:
      "A core hold that trains total-body bracing and protects the lower back under load.",
    instructions: [
      "Lie face down and prop up on your forearms and toes.",
      "Pull your hips up so your body forms a straight line from head to heel.",
      "Squeeze your glutes and brace your abs as if about to be punched.",
      "Hold the position while breathing steadily for the full interval.",
    ],
  },
  {
    slug: "conventional-deadlift",
    name: "Conventional Deadlift",
    tags: ["Back", "Legs"],
    equipment: "Barbell",
    durationMin: 28,
    calories: 260,
    rating: 4.9,
    difficulty: "Advanced",
    sets: 5,
    reps: "5",
    description:
      "A full-posterior-chain lift that builds raw pulling strength from the floor.",
    instructions: [
      "Stand with the bar over mid-foot, shins close to the bar.",
      "Bend down and grip the bar just outside your knees.",
      "Brace hard, flatten your back, and drive through the floor to stand.",
      "Lock out by squeezing your glutes, then reverse the motion to reset.",
    ],
  },
  {
    slug: "push-up",
    name: "Push-up",
    tags: ["Chest", "Arms", "Core"],
    equipment: "Bodyweight",
    durationMin: 10,
    calories: 90,
    rating: 4.5,
    difficulty: "Beginner",
    sets: 3,
    reps: "AMRAP",
    description:
      "The classic bodyweight press for chest, triceps, and core stability — anywhere, anytime.",
    instructions: [
      "Start in a plank with hands slightly wider than shoulders.",
      "Keep your body in a straight line from head to heels.",
      "Lower your chest toward the floor with elbows at about 45 degrees.",
      "Press back up to full arm extension without letting your hips sag.",
    ],
  },
  {
    slug: "walking-lunge",
    name: "Walking Lunge",
    tags: ["Legs"],
    equipment: "Dumbbells (optional)",
    durationMin: 18,
    calories: 170,
    rating: 4.4,
    difficulty: "Intermediate",
    sets: 3,
    reps: "12 per leg",
    description:
      "A unilateral leg move that builds strength, balance, and single-leg stability.",
    instructions: [
      "Stand tall, optionally holding a dumbbell in each hand.",
      "Step forward into a long stride and lower until both knees hit about 90 degrees.",
      "Push through your front heel to step into the next lunge.",
      "Keep your torso upright and core braced throughout.",
    ],
  },
  {
    slug: "russian-twist",
    name: "Russian Twist",
    tags: ["Core"],
    equipment: "Medicine Ball",
    durationMin: 8,
    calories: 70,
    rating: 4.1,
    difficulty: "Beginner",
    sets: 3,
    reps: "16 (8 per side)",
    description:
      "A rotational core move that builds obliques and trunk control.",
    instructions: [
      "Sit with knees bent and lean back slightly, holding a weight with both hands.",
      "Lift your feet off the floor for an added challenge, or keep them down.",
      "Rotate your torso to tap the weight on the floor beside your hip.",
      "Rotate to the other side, keeping your core braced throughout.",
    ],
  },
  // Added to complete the "Twelve lifts" count — not present in the Figma file.
  {
    slug: "lat-pulldown",
    name: "Lat Pulldown",
    tags: ["Back", "Arms"],
    equipment: "Cable Machine",
    durationMin: 15,
    calories: 110,
    rating: 4.5,
    difficulty: "Beginner",
    sets: 4,
    reps: "10-12",
    description:
      "A machine-based back builder that's a great entry point before progressing to pull-ups.",
    instructions: [
      "Sit tall and secure your thighs under the pad.",
      "Grip the bar wider than shoulder width.",
      "Pull the bar down to your upper chest, driving your elbows down.",
      "Control the weight back up to a full stretch.",
    ],
  },
  {
    slug: "seated-cable-row",
    name: "Seated Cable Row",
    tags: ["Back"],
    equipment: "Cable Machine",
    durationMin: 15,
    calories: 115,
    rating: 4.6,
    difficulty: "Beginner",
    sets: 4,
    reps: "10-12",
    description:
      "A horizontal pulling move that targets the mid-back and improves posture.",
    instructions: [
      "Sit with knees slightly bent and grip the handle with both hands.",
      "Sit up tall and pull the handle toward your torso.",
      "Squeeze your shoulder blades together at the finish.",
      "Extend your arms back out with control, keeping your spine neutral.",
    ],
  },
];

export function getWorkoutBySlug(slug: string): Workout | undefined {
  return workouts.find((w) => w.slug === slug);
}
