"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spinner } from "../spinner";
import { useFormik } from "formik";
import { deleteMeal } from "@/db-service/meals";
import { MealShort } from "@/types/meals";

export const MealItem = ({ meal }: { meal: MealShort }) => {
  const router = useRouter();

  const formik = useFormik({
    onSubmit: async () => {
      await deleteMeal(meal.id);
      router.refresh();
    },
    initialValues: {},
  });

  return (
    <>
      <div>
        <button
          onClick={() => {
            formik.handleSubmit();
          }}
          type="button"
          className="text-red-700 p-2 mr-3 cursor-pointer"
        >
          X
        </button>
        <Link className="hover:underline" href={`/meals/${meal.id}`}>
          {meal.title}
        </Link>
      </div>

      <div>{`${meal.price} zł`}</div>
      {formik.isSubmitting && <Spinner />}
    </>
  );
};
