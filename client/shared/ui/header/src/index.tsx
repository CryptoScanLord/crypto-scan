import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Search from '@ui/search'

const Header: FC = () => {
  const [wallet, setWallet] = useState<string>('')
  return (
    <Box width='100%' height='100px' display='inline-flex' alignItems='center' justifyContent='space-between'>
      <Typography variant='h6'>OrdiTracker</Typography>
      <Search value={wallet} handleChange={setWallet} />
    </Box>
  )
}

export default Header
