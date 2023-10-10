import { useState }     from 'react'

import SearchIcon       from '@mui/icons-material/Search'
import Box              from '@mui/material/Box'
import Button           from '@mui/material/Button'
import Typography       from '@mui/material/Typography'
import { useNavigate }  from 'react-router-dom'

import { useAuthGuard } from '@lib/auth-react'
import { Search }       from '@ui/search'

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
