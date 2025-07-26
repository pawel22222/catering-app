import { NextResponse } from "next/server";
import { addMeal, deleteMeal } from "@/db-service/meals";
import { MealDto } from "@/types/meals";

export async function POST(req: Request) {
  const body: MealDto = await req.json();
  const result = await addMeal(body);
  return NextResponse.json(result);
}

export async function DELETE(req: Request) {
  const id: number = await req.json();
  const result = await deleteMeal(id);
  return NextResponse.json(result);
}
