"use client";

import { MealShort } from "@/types/meals";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spinner } from "../spinner";
import { useFormik } from "formik";

export const MealItem = ({ meal }: { meal: MealShort }) => {
  const router = useRouter();

  const formik = useFormik({
    onSubmit: () => {
      fetch("/api/meals/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meal.id),
      });
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
