import { FC }       from 'react'
import { useState } from 'react'

import Box          from '@mui/material/Box'
import Typography   from '@mui/material/Typography'

import { Search }   from '@ui/search'

export const Header: FC = () => {
  const [wallet, setWallet] = useState<string>('')
  return (
    <Box width='100%' height='100px' display='flex' alignItems='center' justifyContent='space-between'>
      <Typography variant='h6'>OrdiTracker</Typography>
      <Search value={wallet} handleChange={setWallet} />
    </Box>
  )
}
