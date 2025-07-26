import { cn } from "@/utilsStyle";
import { FormikProps } from "formik";

type Props<T> = {
  label: string;
  fieldName: string;
  formik: FormikProps<T>;
  className?: string;
  disabled?: boolean;
};

const inputClass = (disabled: boolean) =>
  cn(
    "block w-full rounded-md p-2 border border-gray-400 focus:border-white text-white hover:border-white",
    {
      "bg-neutral-900 border-black hover:border-black": disabled,
    }
  );

const LabelClassName = "mb-1";

export const ValidationMessage = <T extends Record<string, unknown>>({
  fieldName,
  formik,
}: Pick<Props<T>, "fieldName" | "formik">) => {
  const error = formik.errors[fieldName] as string;
  const touched = formik.touched[fieldName];

  return (
    error && touched && <p className="text-red-700 mt-1 text-xs">{error}</p>
  );
};

export const InputText = <T extends Record<string, unknown>>({
  label,
  fieldName,
  formik,
  className,
  disabled,
}: Props<T>) => {
  return (
    <label htmlFor={fieldName}>
      <p className={`${LabelClassName}`}>{label}</p>
      <input
        type="text"
        id={fieldName}
        value={formik.values[fieldName] as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${inputClass(!!disabled)} ${className}`}
        disabled={disabled}
      />
      <ValidationMessage fieldName={fieldName} formik={formik} />
    </label>
  );
};
export const Textarea = <T extends Record<string, unknown>>({
  label,
  fieldName,
  formik,
  className,
  disabled,
}: Props<T>) => {
  return (
    <label htmlFor={fieldName}>
      <p className={`${LabelClassName}`}>{label}</p>
      <textarea
        id={fieldName}
        value={formik.values[fieldName] as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${inputClass(!!disabled)} ${className}`}
        disabled={disabled}
      />
      <ValidationMessage fieldName={fieldName} formik={formik} />
    </label>
  );
};
export const InputNumber = <T extends Record<string, unknown>>({
  label,
  fieldName,
  formik,
  className,
  disabled,
}: Props<T>) => {
  return (
    <label htmlFor={fieldName}>
      <p className={`${LabelClassName}`}>{label}</p>
      <input
        type="number"
        id={fieldName}
        value={formik.values[fieldName] as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${inputClass(!!disabled)} ${className}`}
        disabled={disabled}
      />
      <ValidationMessage fieldName={fieldName} formik={formik} />
    </label>
  );
};
