import { getMealById } from "@/db-service/meals";
import { notFound } from "next/navigation";

type Props = {
  params: { id: number };
};

export default async function Page({ params }: Props) {
  const meal = await getMealById(params.id);

  if (!meal) notFound();

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">{meal.title}</p>
      <p className="text-sm ">{meal.description}</p>
      <p className="font-bold">{meal.price} zł</p>
    </div>
  );
}
