"use client";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Eye, EyeClosed } from "lucide-react";

const Field = ({ label, value, placeholder, onChange, type, error }) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-8">
      <div className="mb-2">
        <label className="text-gray-700 text-sm" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="relative">
        <input
          id={id}
          value={value}
          type={showPassword ? "text" : type}
          onChange={onChange}
          className={twMerge("px-4 h-12 rounded-3xl border border-gray-300 w-full", error && "border-red-500")}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0 right-0 bottom-0 flex items-center px-4 cursor-pointer text-gray-400"
          >
            {showPassword ? <Eye aria-label="Hide Password" /> : <EyeClosed className="size-4" aria-label="Show Password" />}
          </button>
        )}
      </div>
      <div className="text-sm text-red-500 relative">
        {/* <div className="absolute">{error}</div> 改成以下ALERT*/}
        {error && <div className="absolute" role="alert">{error}</div>}
      </div>
    </div>
  )
}
export default Field;