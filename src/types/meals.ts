import { Database } from "./supabase";

export type Meal = Database["public"]["Tables"]["meals"]["Row"];
export type MealShort = Omit<Meal, "created_at" | "description">;
export type MealDto = Omit<Meal, "id" | "created_at">;
