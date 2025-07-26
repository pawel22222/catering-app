export type Meal = {
  id: number;
  title: string;
  description: string;
  price: number;
};
export type MealShort = Omit<Meal, "description">;
export type MealDto = Omit<Meal, "id">;
