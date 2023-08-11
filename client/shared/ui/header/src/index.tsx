import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <Box
      width='100%'
      height='100px'
      display='flex'
      alignItems='center'
      justifyContent='space-beet-ween'
      padding='0px 10% 0px 10%'
    >
      <Typography variant='h6'>OrdiTracker</Typography>
      {/* <Search/> */}
    </Box>
  )
}

export default Header
