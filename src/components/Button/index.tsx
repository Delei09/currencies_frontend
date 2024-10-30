import { Button as ButtonM } from '@mui/material';
import React, { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof ButtonM>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonM
      variant="contained"
      style={{
        width: 300,
        height: 50,
        backgroundColor: '#8682fc',
        color: 'white',
        textTransform: 'none',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        fontFamily: 'Roboto',
      }}
      {...props}
    >
      {children}
    </ButtonM>
  );
}
