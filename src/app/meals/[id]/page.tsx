import { getMealById } from "@/db-service/meals";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const meal = await getMealById(Number(id));

  if (!meal) notFound();

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">{meal.title}</p>
      <p className="text-sm">{meal.description}</p>
      <p className="font-bold">{meal.price} zł</p>
    </div>
  );
}
