// components/View.tsx
import React from 'react';
import CopyButton from './CopyButton';

interface ViewProps {
  data: {
    checkedValues: string[];
    inputValue: string;
  }[];
  textOnlyInput: string;
}

const View: React.FC<ViewProps> = ({ data, textOnlyInput }) => {
  const contentToCopy = `<div style="display: flex; margin: 20px;">
    <div style="width: 30%;">
      <img alt="Company Logo" id="logo" src="/files/${textOnlyInput}">
    </div>
    <div style="text-align: right; width: 70%; display: flex; flex-direction: column;">
      ${
        data[0]?.inputValue &&
        `<h1 style="font-size: 9px;font-weight: 500; padding: 0; margin: 0; text-transform: capitalize; ${data[0]?.checkedValues[0]};${data[0]?.checkedValues[1]};${data[0]?.checkedValues[2]};${data[0]?.checkedValues[3]};${data[0]?.checkedValues[4]};">${data[0]?.inputValue}</h1>`
      }
      ${
        data[1]?.inputValue &&
        `<h1 style='font-size: 9px;font-weight: 500; padding: 0; margin: 0; text-transform: capitalize;${data[1]?.checkedValues[0]};${data[1]?.checkedValues[1]};${data[1]?.checkedValues[2]};${data[1]?.checkedValues[3]};${data[1]?.checkedValues[4]};'>${data[1]?.inputValue}</h1>`
      }
      ${
        data[2]?.inputValue &&
        `<h1 style="font-size: 9px;font-weight: 500; padding: 0; margin: 0; text-transform: capitalize;${data[2]?.checkedValues[0]};${data[2]?.checkedValues[1]};${data[2]?.checkedValues[2]};${data[2]?.checkedValues[3]};${data[2]?.checkedValues[4]};">${data[2]?.inputValue}</h1>`
      }
      ${
        data[3]?.inputValue &&
        `<h1 style="font-size: 9px;font-weight: 500; padding: 0; margin: 0; text-transform: capitalize;${data[3]?.checkedValues[0]};${data[3]?.checkedValues[1]};${data[3]?.checkedValues[2]};${data[3]?.checkedValues[3]};${data[3]?.checkedValues[4]};">${data[3]?.inputValue}</h1>`
      }
      ${
        data[4]?.inputValue &&
        `<h1 style="font-size: 9px;font-weight: 500; padding: 0; margin: 0; text-transform: capitalize;${data[4]?.checkedValues[0]};${data[4]?.checkedValues[1]};${data[4]?.checkedValues[2]};${data[4]?.checkedValues[3]};${data[4]?.checkedValues[4]};">
      ${data[4]?.inputValue}
      </h1>`
      }
      ${
        data[5]?.inputValue &&
        `<h1 style="font-size: 9px;font-weight: 500; padding: 0; margin: 0; text-transform: capitalize;${data[5]?.checkedValues[0]};${data[5]?.checkedValues[1]};${data[5]?.checkedValues[2]};${data[5]?.checkedValues[3]};${data[5]?.checkedValues[4]};">
      ${data[5]?.inputValue}
      </h1>`
      }
    </div>
  </div>`;

  return (
    <div>
      <div className='toCopy text-sm'>{contentToCopy}</div>
      <div className='fixed top-10 right-10'>
        <CopyButton textToCopy={contentToCopy} />
      </div>
    </div>
  );
};

export default View;
