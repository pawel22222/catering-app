import { Heading } from "@/components/heading";
import { getMeals } from "@/db-service/meals";
import { Suspense } from "react";
import Loading from "../loading";
import { AddMealForm } from "@/components/meals/add-meal-form";
import { MealItem } from "@/components/meals/meal-item";

export default async function Page() {
  return (
    <div className="flex flex-wrap gap-20 justify-between w-full">
      <div className="flex flex-col grow">
        <Heading>Meal list</Heading>
        <Suspense fallback={<Loading />}>
          <MealList />
        </Suspense>
      </div>

      <div className="w-[400px]">
        <Heading>Add meal</Heading>
        <AddMealForm />
      </div>
    </div>
  );
}

const MealList = async () => {
  const meals = await getMeals();

  return (
    <ul>
      {meals.map((meal) => (
        <li className="flex justify-between py-2" key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};
