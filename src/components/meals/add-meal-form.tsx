"use client";

import { useFormik } from "formik";
import { Yup } from "../yup";
import { InputText, Textarea, InputNumber } from "../form-utils";
import { Button } from "../button";
import { type MealDto } from "@/types/meals";
import { useRouter } from "next/navigation";
import { Spinner } from "../spinner";

export const AddMealForm = () => {
  const router = useRouter();

  const formik = useFormik({
    onSubmit: async (values: MealDto) => {
      await fetch("/api/meals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      formik.resetForm();
      router.refresh();
    },
    initialValues: {
      title: "",
      description: "",
      price: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Field is required"),
      description: Yup.string(),
      price: Yup.number()
        .required("Field is required")
        .min(0, "Value have to be positive number"),
    }),
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
      <InputText label="Title" fieldName="title" formik={formik} />
      <Textarea label="Description" fieldName="description" formik={formik} />
      <InputNumber label="Price" fieldName="price" formik={formik} />

      <div className="flex gap-4">
        <Button
          type="reset"
          onClick={() => formik.resetForm()}
          disabled={
            (!formik.dirty && Object.keys(formik.errors).length === 0) ||
            formik.isSubmitting
          }
          variant="danger"
        >
          Reset
        </Button>
        <Button disabled={formik.isSubmitting} type="submit">
          Add
          {formik.isSubmitting && <Spinner />}
        </Button>
      </div>
    </form>
  );
};
