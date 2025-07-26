import { Heading } from "@/components/heading";
import { getMeals } from "@/db-service/meals";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Page() {
  return (
    <div>
      <Heading>Meal list</Heading>
      <Suspense fallback={<Loading />}>
        <MealList />
      </Suspense>
    </div>
  );
}

const MealList = async () => {
  const meals = await getMeals();

  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <Link className="py-2 hover:underline" href={`/meals/${meal.id}`}>
            {meal.title} {meal.price} zł
          </Link>
        </li>
      ))}
    </ul>
  );
};
