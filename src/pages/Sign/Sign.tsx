import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { Grid2, TextField, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';

export default function Sign() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <header>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
          style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            height: 50,
            background: 'transparent',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <BottomNavigationAction
            label="Criar conta"
            value="createAccount"
            icon={<AccountCircleIcon />}
          />
          <BottomNavigationAction
            label="Login"
            value="login"
            icon={<LoginIcon />}
          />
        </BottomNavigation>
      </header>
      <body style={{ marginTop: 0 }}>
        <Grid2 container spacing={0}>
          <Grid2
            size={{ xs: 12, md: 4, lg: 4 }}
            style={{
              background:
                'radial-gradient(circle, rgba(15,2,244,1) 0%, rgba(73,73,73,1) 0%, rgba(1,16,19,1) 100%)',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src={require('../../assets/currencies.png')}
              alt="currencies"
              style={{ width: '100%', height: 250 }}
            />
            <Typography
              variant="h4"
              component="h1"
              fontFamily={'Roboto'}
              color={'white'}
            >
              Real em Tempo Real
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontFamily={'Roboto'}
              color={'white'}
              fontSize={14}
              marginTop={10}
            >
              Sua aplicação de conversão de moedas em tempo real, fácil e
              prático.
            </Typography>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 8, lg: 8 }}
            style={{
              backgroundColor:
                'radial-gradient(circle, rgba(15,2,244,1) 0%, rgba(255,255,255,1) 0%, rgba(168,178,180,1) 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 10
            }}
          >
            <Typography
              variant="h1"
              component="h4"
              fontFamily={'Roboto'}
              fontSize={22}
              marginTop={10}
            >
              Login
            </Typography>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Úsuario" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
          </Grid2>
        </Grid2>
      </body>
    </>
  );
}
