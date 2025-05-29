import { useState } from "react";
import { X } from "lucide-react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  resetTrigger?: () => void;
}

const Input = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  disabled,
  resetTrigger,
}: InputProps) => {
  const handleClear = () => {
    const syntheticEvent = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
    resetTrigger?.();
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded border border-gray-300 px-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
          aria-label="Clear input"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Input;
