import { useState } from 'react'
import PageContainer from '@ui/container'
import Search from '@ui/search'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { useAuthGuard } from '@lib/auth-react'

export const SearchPage = () => {
  useAuthGuard()

  const [wallet, setWallet] = useState<string>('')

  const handleClick = () => {
    setWallet('')
    // navigate('...')
  }

  return (
    <PageContainer sx={{ justifyItems: 'center', alignItems: 'center', height: '100dvh' }}>
      <Box display='flex' flexDirection='column'>
        <Typography>Wallet</Typography>
        <Search value={wallet} handleChange={setWallet} />
        <Button sx={{ marginTop: '5px' }} startIcon={<SearchIcon />} type='submit' onClick={handleClick}>
          Search
        </Button>
      </Box>
    </PageContainer>
  )
}
