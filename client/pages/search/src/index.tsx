import { useState } from 'react'
import PageContainer from '@ui/container'
import Search from '@ui/search'
import { Box } from '@mui/material'

export const SearchPage = () => {
  const [wallet, setWallet] = useState<string>('')
  return (
    <PageContainer>
      <Search value={wallet} handleChange={setWallet} />
    </PageContainer>
  )
}
