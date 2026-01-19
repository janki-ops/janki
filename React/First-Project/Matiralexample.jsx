import React from 'react'
import { Stack,Button } from '@mui/material';

import Button1  from "react-bootstrap/Button";

export const Matiralexample = () => {
  return (
    <div>
        <h3>Matiral UI Example</h3>

         <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

     <Button1 as="a" variant="primary">
    Button as link
  </Button1>
    </div>
  )
}

