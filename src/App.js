import logo from './logo.svg';
import './App.css';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import { FiArchive } from "react-icons/fi";
// import { FiAlignJustify } from "react-icons/fi";
// import { AiFillAccountBook } from "react-icons/ai";
// import { AiFillClockCircle } from "react-icons/ai";
// import { FaSnapchatGhost } from "react-icons/ai";




function App()

{
  
  
 
  return (
    <>
<div>
  {/* <FiArchive/>
  <FiAlignJustify/>
  <AiFillAccountBook/>
  <AiFillClockCircle/> */}
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="name" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
</div> 
    </>
  )
}
export default App;
