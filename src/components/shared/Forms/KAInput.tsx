import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";

type TMTInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
};

const KAInput = ({ name, type = "text", placeholder }: TMTInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            className={`h-11 `}
            placeholder={placeholder ? placeholder : ""}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {(errors[name]?.message as string) || "Invalid input"}
        </p>
      )}
    </div>
  );
};

export default KAInput;
