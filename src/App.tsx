import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function App() {
  return (
    <div className="App">
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     
    </Box>

    </div>
  );
}

export default App;

// 28d9dab5d52c2e21476c99d0be43427d API KEY
