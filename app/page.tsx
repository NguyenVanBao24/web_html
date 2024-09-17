// app/page.tsx
'use client';
import { useState } from 'react';
import FormGroup from '../components/FormGroup';
import View from '@/components/View';

interface FormDataItem {
  checkedValues: string[];
  inputValue: string;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormDataItem[]>([]);
  const [textOnlyInput, setTextOnlyInput] = useState('');

  const handleDataChange = (data: FormDataItem[], textOnlyInput: string) => {
    setFormData(data);
    setTextOnlyInput(textOnlyInput);
  };

  return (
    <div className='flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-semibold'>CONVERT HTML</h1>
      <div className='flex w-full p-8 gap-8'>
        <div className='w-3/4'>
          <FormGroup onDataChange={handleDataChange} />
        </div>
        <div className='w-1/4'>
          <View
            data={formData}
            textOnlyInput={textOnlyInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
