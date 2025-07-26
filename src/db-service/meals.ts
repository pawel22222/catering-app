import { supabase } from "@/lib/supabase";
import { MealDto } from "@/types/meals";

export const getMeals = async () => {
  const { data, error } = await supabase
    .from("meals")
    .select("id, title, price");

  if (error) throw error;
  return data;
};

export const getMealById = async (id: number) => {
  const { data, error } = await supabase
    .from("meals")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data;
};

export const addMeal = async (meal: MealDto) => {
  const { data, error } = await supabase
    .from("meals")
    .insert([meal])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteMeal = async (id: number) => {
  const { data, error } = await supabase.from("meals").delete().eq("id", id);

  if (error) throw error;
  return data;
};
