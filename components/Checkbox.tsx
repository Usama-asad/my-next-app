// components/Checkbox.jsx
import React, { useState } from 'react';

const Checkbox = ({
  id,
  name,
  label,
  defaultChecked = false,
  checked: controlledChecked, // Renamed to avoid conflict with internal state
  onChange,
  disabled = false,
  className = '',
  labelClassName = '',
}) => {
  // Use internal state only if it's an uncontrolled component
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Determine the current checked state:
  // If `controlledChecked` prop is provided (not undefined), use it.
  // Otherwise, use the component's internal state.
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  // Handle change event
  const handleChange = (event) => {
    if (disabled) return;

    // If an `onChange` prop was provided, call it.
    // This makes it a controlled component.
    if (onChange) {
      onChange(event);
    }
    // Otherwise, it's an uncontrolled component, update internal state.
    else {
      setInternalChecked(event.target.checked);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={`
          form-checkbox h-5 w-5 text-purple-600 rounded
          border-gray-300 focus:ring-purple-500 cursor-pointer
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      />
      {label && (
        <label
          htmlFor={id || name}
          className={`ml-2 text-gray-700 dark:text-gray-300 cursor-pointer ${labelClassName}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;