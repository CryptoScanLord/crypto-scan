import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { useLogin } from '@lib/auth-react'
import { SearchPage } from '@page/search'

export const LoginPage: FC = () => {
  const login = useLogin()

  return <SearchPage />
}
