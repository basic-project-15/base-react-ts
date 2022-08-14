import React from 'react';
import { Typography } from '@mui/material';

const App = ()  => {
  return (
    <div className='flex w-full bg-blue-400 h-screen justify-center items-center'>
      <Typography variant="h1" component="h2" style={{fontFamily: 'Poppins-Bold'}}>
        Hola Mundo
      </Typography>
    </div>
  );
}

export default App;
