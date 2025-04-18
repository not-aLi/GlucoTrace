import { useState } from "react";
import clsx from "clsx";

import { Controller, Control, ControllerRenderProps } from "react-hook-form";
import { MantineProvider, PinInput } from "@mantine/core";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DateInput,
  GlucoseInput,
  MealTimingInput,
  TimeInput,
} from "./AddReadingPageInputs";
import { CommonInputProps } from "@/types/formTypes";

interface InputProps {
  type?:
    | "text"
    | "email"
    | "password"
    | "textarea"
    | "otp"
    | "glucose"
    | "mealTiming"
    | "date"
    | "time";
  control: Control<any>;
  name: string;
  isSignIn?: boolean;
  error?: string;
  label: string;
  otpLength?: 4 | 6;
  className?: string;
  darkMode?: boolean;
}

const InputField = ({
  label,
  type = "text",
  control,
  name,
  error,
  isSignIn,
  otpLength = 4,
  className,
  darkMode,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={clsx("flex flex-col", className)}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const commonProps = { label, field, error };
          switch (type) {
            case "textarea":
              return <TextAreaInput {...commonProps} />;
            case "password":
              return (
                <PasswordInput
                  {...commonProps}
                  {...{ isSignIn, showPassword, setShowPassword }}
                />
              );
            case "otp":
              return <OtpInput {...{ field, error, otpLength }} />;

            case "glucose":
              return (
                <GlucoseInput {...{ ...commonProps }} darkMode={darkMode} />
              );

            case "mealTiming":
              return <MealTimingInput {...{ ...commonProps }} />;

            case "date":
              return <DateInput {...{ ...commonProps }} darkMode={darkMode} />;

            case "time":
              return <TimeInput {...{ ...commonProps }} darkMode={darkMode} />;

            default:
              return <BaseInput {...commonProps} type={type} />;
          }
        }}
      />
    </div>
  );
};

const BaseInput = ({
  label,
  field,
  error,
  type,
}: CommonInputProps & { type: string }) => (
  <TextField
    label={label}
    {...field}
    type={type}
    variant="outlined"
    fullWidth
    error={!!error}
    helperText={error}
    value={field.value || ""}
  />
);

const TextAreaInput = ({ label, field, error }: CommonInputProps) => (
  <TextField
    label={label}
    {...field}
    multiline
    rows={4}
    variant="outlined"
    fullWidth
    error={!!error}
    helperText={error}
    value={field.value || ""}
  />
);

const PasswordInput = ({
  label,
  field,
  showPassword,
  error,
  isSignIn,
  setShowPassword,
}: CommonInputProps & {
  showPassword: boolean;
  isSignIn?: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  return (
    <div>
      <TextField
        label={label}
        {...field}
        type={showPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={error}
        value={field.value || ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton disableRipple onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <EyeClosed
                    size={20}
                    className="hover:text-blue-500 text-gray-400"
                  />
                ) : (
                  <Eye
                    size={20}
                    className="hover:text-blue-500 text-gray-400"
                  />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          onCopy: (e) => e.preventDefault(),
          onCut: (e) => e.preventDefault(),
          onPaste: (e) => e.preventDefault(),
        }}
      />
      {isSignIn && (
        <Link to="/forgot-password" className="flex justify-end mt-1">
          <p className="text-zinc-400 hover:text-blue-500 cursor-pointer transition-all max-sm:text-sm">
            Forgot Password?
          </p>
        </Link>
      )}
    </div>
  );
};

const OtpInput = ({
  field,
  error,
  otpLength,
}: {
  field: ControllerRenderProps<any, string>;
  error?: string;
  otpLength?: 4 | 6;
}) => {
  const otpWidth =
    otpLength === 4
      ? "w-[70px] h-[70px] max-lg:w-16 max-lg:h-16 max-sm:w-12 max-sm:h-12"
      : "w-16 h-16 max-lg:w-14 max-lg:h-14 max-sm:w-10 max-sm:h-10";
  const otpGap = otpLength === 4 ? "gap-4 max-sm:gap-2" : "gap-3 max-sm:gap-2";

  return (
    <MantineProvider>
      <div className="flex flex-col gap-2 items-center justify-center">
        <PinInput
          length={otpLength}
          type="number"
          placeholder=""
          value={field.value || ""}
          onChange={(value) => field.onChange(value)}
          classNames={{
            root: `flex justify-center w-full ${otpGap}`,
            input: `${otpWidth} transition-all text-xl text-center border focus:border-2 rounded-lg outline-none ${
              error
                ? "border-red-500 focus:border-red-500 focus:bg-red-50"
                : "border-gray-300 hover:border-blue-600 focus:border-blue-600 focus:bg-blue-50"
            }`,
          }}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    </MantineProvider>
  );
};

export default InputField;
