import React, { useState, useCallback } from 'react';
import FormComponent from './FormComponent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface FormDataItem {
  checkedValues: string[];
  inputValue: string;
}

interface FormGroupProps {
  onDataChange: (data: FormDataItem[], textOnlyInput: string) => void;
}

const FormGroup: React.FC<FormGroupProps> = ({ onDataChange }) => {
  const initialFormData: FormDataItem[] = Array.from({ length: 6 }, () => ({ checkedValues: [], inputValue: '' }));
  const [formData, setFormData] = useState<FormDataItem[]>(initialFormData);
  const [textOnlyInput, setTextOnlyInput] = useState('');

  const handleCheckboxChange = useCallback((index: number, value: string, checked: boolean) => {
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      const updatedCheckedValues = checked ? [...newFormData[index].checkedValues, value] : newFormData[index].checkedValues.filter((v) => v !== value);
      newFormData[index] = { ...newFormData[index], checkedValues: updatedCheckedValues };
      return newFormData;
    });
  }, []);

  const handleInputChange = useCallback((index: number, value: string) => {
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[index] = { ...newFormData[index], inputValue: value };
      return newFormData;
    });
  }, []);

  const handleTextOnlyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextOnlyInput(event.target.value);
  };

  const handleSubmit = () => {
    onDataChange(formData, textOnlyInput);
  };

  const placeholders = ['name_vn', 'name_en', 'tax', 'address_vn', 'address_en'];

  return (
    <div>
      {formData.map((form, index) => (
        <FormComponent
          key={index}
          formIndex={index}
          checkedValues={form.checkedValues}
          inputValue={form.inputValue}
          onCheckboxChange={handleCheckboxChange}
          onInputChange={handleInputChange}
          placeholder={placeholders[index]} // Cung cấp placeholder cho FormComponent
        />
      ))}
      <div>
        <TextField
          className='w-full'
          variant='outlined'
          type='text'
          value={textOnlyInput}
          onChange={handleTextOnlyInputChange}
          placeholder='Enter IMAGE'
        />
      </div>
      <Button
        variant='contained'
        onClick={handleSubmit}
        className='w-full'
      >
        Show All Data
      </Button>
    </div>
  );
};

export default FormGroup;
