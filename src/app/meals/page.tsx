export const dynamic = "force-dynamic";

import { Heading } from "@/components/heading";
import { Suspense } from "react";
import Loading from "../loading";
import { AddMealForm } from "@/components/meals/add-meal-form";
import { MealList } from "@/components/meals/meal-list";

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
