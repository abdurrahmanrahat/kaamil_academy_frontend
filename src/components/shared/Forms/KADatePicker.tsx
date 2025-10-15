"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

// npm install @mui/x-date-pickers @mui/material dayjs @emotion/react @emotion/styled

type TKADatePickerProps = {
  name: string;
  className?: string;
  placeholder?: string;
};

const KADatePicker = ({
  name,
  className = "",
  placeholder = "Pick a date",
}: TKADatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            value={value ? dayjs(value) : null}
            onChange={(date) => onChange(date ? date.format("YYYY-MM-DD") : "")}
            className={`${className}`}
            slotProps={{
              textField: {
                placeholder,
                fullWidth: true,
                variant: "outlined",
                sx: {
                  "& .MuiOutlinedInput-root": {
                    paddingY: "2px", // Reduce vertical padding
                    borderColor: "#CCE5CC", // Custom border color
                    "& fieldset": {
                      borderColor: "#CCE5CC", // Normal border
                    },
                    "&:hover fieldset": {
                      borderColor: "#CCE5CC", // Prevent changing on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#CCE5CC", // Focus border color
                    },
                  },
                  "& input": {
                    paddingY: "2px", // Adjust input padding directly
                  },
                },
              },
            }}
            format="YYYY-MM-DD"
            openTo="year" // Opens directly to year selection
            views={["year", "month", "day"]} // Allows selecting year, then month, then day
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {(errors[name]?.message as string) || "Invalid input"}
        </p>
      )}
    </LocalizationProvider>
  );
};

export default KADatePicker;
