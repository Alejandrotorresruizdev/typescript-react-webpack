import Image2 from 'Images/image2.png';
import SvgImage from 'Images/svgImage.svg';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import React from 'react';

const HelloWorld = () => {
  return (
    <div className="container">
      <p>Hello World</p>
      <img src={Image2} alt="Girl in a jacket" width="500" height="600" />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
};

export default HelloWorld;
