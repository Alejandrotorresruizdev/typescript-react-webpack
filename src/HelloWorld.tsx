import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <div className="actions">
        <Button onClick={handleIncrement} variant="contained">
          {' '}
          +{' '}
        </Button>
        <h5>Count is {count}</h5>
        <Button onClick={handleDecrement} variant="contained">
          {' '}
          -{' '}
        </Button>
      </div>

      <button onClick={() => setCount(0)}>Reset</button>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </Stack>
    </div>
  );
};

export default HelloWorld;
