import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Search from '@ui/search'

const Header: FC = () => {
  const [wallet, setWallet] = useState<string>('')
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
      <Search value={wallet} handleChange={setWallet} />
    </Box>
  )
}

export default Header