import React from 'react'
import { Button, Checkbox } from '@mui/material'
import {Rating} from '@mui/material';
function Mui() {
  return (
    <div>
        <h1 className='text-center text-danger'>Hello</h1>
      <Button variant="outlined" color='error' size='small'>Contained</Button>
            <Rating name="size-small" defaultValue={2} size="small" />
      <Checkbox  defaultChecked color="secondary" />

    </div>
  )
}

export default Mui