import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

interface FormComponentProps {
  formIndex: number;
  checkedValues: string[];
  inputValue: string;
  onCheckboxChange: (index: number, value: string, checked: boolean) => void;
  onInputChange: (index: number, value: string) => void;
  placeholder: string; // Thêm prop mới cho placeholder
}

const FormComponent: React.FC<FormComponentProps> = React.memo(({ formIndex, checkedValues, inputValue, onCheckboxChange, onInputChange, placeholder }) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    onCheckboxChange(formIndex, value, checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(formIndex, event.target.value);
  };

  return (
    <div>
      <div>
        {/* Các checkbox */}
        {['color: #000', 'color: #999999', 'font-style: italic', 'font-weight: bolder', 'text-decoration: underline'].map((color) => (
          <label
            key={color}
            htmlFor={`${formIndex}-${color}`}
          >
            <Checkbox
              id={`${formIndex}-${color}`}
              value={color}
              checked={checkedValues.includes(color)}
              onChange={handleCheckboxChange}
            />
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </label>
        ))}
      </div>
      <TextField
        className='w-full'
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder} // Sử dụng prop placeholder mới
      />
    </div>
  );
});

export default FormComponent;
