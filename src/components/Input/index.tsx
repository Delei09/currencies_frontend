import { TextField } from '@mui/material';
import React, { ComponentProps } from 'react';

export type InputProps = ComponentProps<typeof TextField>;

export default function Input({...props }: InputProps) {
  return (
    <TextField
      color="primary"
      variant="outlined"
      size="small"
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(137,124,190,1)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(137,124,190,1)',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(137,124,190,1)',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'rgba(137,124,190,1)',
        },
      }}
      {...props}
    />
  );
}

