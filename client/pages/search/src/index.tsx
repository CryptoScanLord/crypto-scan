import { useState } from 'react'
import Search from '@ui/search'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { useAuthGuard } from '@lib/auth-react'
import { useNavigate } from 'react-router-dom'

export const SearchPage = () => {
  useAuthGuard()
  const navigate = useNavigate()

  const [wallet, setWallet] = useState<string>('')

  const handleClick = () => {
    navigate(`/portfolio/${wallet}`)
    setWallet('')
  }

  return (
    <Box display='flex' flexDirection='column'>
      <Typography>Wallet</Typography>
      <Search value={wallet} handleChange={setWallet} />
      <Button sx={{ marginTop: '5px' }} startIcon={<SearchIcon />} type='submit' onClick={handleClick}>
        Search
      </Button>
    </Box>
  )
}
