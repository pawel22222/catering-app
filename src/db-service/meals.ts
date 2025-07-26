import { db } from "@/db";

export type Meal = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type MealShort = Omit<Meal, "description">;

export const getMeals = async () => {
  await timeout();
  return db.prepare<[], MealShort>("SELECT * FROM meals").all();
};

export const getMealById = async (id: number) => {
  await timeout();
  // throw Error("Fetching error");
  return db
    .prepare<[number], Meal>("SELECT * FROM Meals WHERE meals.id = ?")
    .get(id);
};

async function timeout(timeout: number = 1000) {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
}
