import { Grid2 } from '@mui/material';
import React, { ComponentProps } from 'react';

type ContainerProps = ComponentProps<typeof Grid2>;
export function ContainerGrid4({ children, ...props }: ContainerProps) {
  return (
    <Grid2
      size={{ xs: 12, md: 4, lg: 4 }}
      style={{
        background:
          'linear-gradient(90deg, rgba(24,21,78,1) 0%, rgba(81,119,198,1) 0%, rgba(81,78,180,1) 39%, rgba(137,124,190,1) 100%)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      {...props}
    >
      {children}
    </Grid2>
  );
}

export function ContainerGrid8({ children, ...props }: ContainerProps) {
  return (
    <Grid2
      size={{ xs: 12, md: 8, lg: 8 }}
      style={{
        background:
          'linear-gradient(135deg, rgba(15,2,244,1) 0%, rgba(255,255,255,1) 0%, rgba(168,178,180,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
      }}
      {...props}
    >
      {children}
    </Grid2>
  );
}

export function ContainerFluid({ children, ...props }: ContainerProps) {
  return (
    <Grid2 container spacing={0} {...props}>
      {children}
    </Grid2>
  );
}


export function ContainerLogin({ children, ...props }: ContainerProps) {
  return (
    <Grid2
      {...props}
      style={{
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.75)',
        borderRadius: 10,
        padding: 10,
        width: '50%',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16
      }}
    >
      {children}
    </Grid2>
  );
}
