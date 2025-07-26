import { MealItem } from "@/components/meals/meal-item";
import { getMeals } from "@/db-service/meals";

export const MealList = async () => {
  const meals = await getMeals();

  if (!meals.length) {
    return <div>Add first meal</div>;
  }

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
