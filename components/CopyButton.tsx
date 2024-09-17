// components/CopyButton.tsx
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');

  const handleCopy = async () => {
    try {
      // Sử dụng Clipboard API để sao chép văn bản vào clipboard
      await navigator.clipboard.writeText(textToCopy);
      setAlertMessage('Text copied to clipboard!');
      setAlertSeverity('success');
      setOpen(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setAlertMessage('Failed to copy text.');
      setAlertSeverity('error');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleCopy}
      >
        Copy
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CopyButton;
