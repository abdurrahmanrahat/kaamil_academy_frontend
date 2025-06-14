/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useFormContext } from "react-hook-form";

type TImageUploaderProps = {
  name: string;
  className?: string;
};

const KAImageUploader = ({ name, className }: TImageUploaderProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ...fieldProps } }) => (
          <div
            className={`relative py-[6px] px-3 rounded-md text-[15px] focus:outline-none text-black border ${className}`}
          >
            <input
              {...fieldProps}
              type="file"
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border file:text-sm file:font-medium file:bg-transparent file:cursor-pointer cursor-pointer file:border-gray-300"
              onChange={(e) => onChange(e.target.files?.[0])}
            />
          </div>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {(errors[name]?.message as string) || "Invalid file"}
        </p>
      )}
    </div>
  );
};

export default KAImageUploader;
