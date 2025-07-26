import { db } from "@/db";
import type { MealShort, Meal, MealDto } from "@/types/meals";

async function timeout(timeout: number = 0) {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
}

export const getMeals = async () => {
  await timeout();
  return db.prepare<[], MealShort>("SELECT * FROM meals").all();
};

export const getMealById = async (id: string) => {
  await timeout();
  return db
    .prepare<[string], Meal>("SELECT * FROM meals WHERE meals.id = ?")
    .get(id);
};

export const addMeal = async ({ title, description, price }: MealDto) => {
  "use server";
  await timeout();
  const query = db.prepare<[string, string, number], Meal>(
    "INSERT INTO meals (title, description, price) VALUES (?, ?, ?)"
  );
  return query.run(title, description, price);
};

export const deleteMeal = async (id: number) => {
  "use server";
  await timeout();
  const query = db.prepare<[number]>("DELETE FROM meals WHERE id = ?");
  return query.run(id);
};
