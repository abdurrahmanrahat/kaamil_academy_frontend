"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

type TSelectOption = {
  label: string;
  value: string;
};

type TKASelectProps = {
  name: string;
  options: TSelectOption[];
  placeholder?: string;
};

const KASelect = ({ name, options, placeholder }: TKASelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              className={`h-11 w-full cursor-pointer rounded-md border border-primary/20 px-3 py-[21px] text-sm shadow-xs `}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">
          {(errors[name]?.message as string) || "Invalid selection"}
        </p>
      )}
    </div>
  );
};

export default KASelect;
