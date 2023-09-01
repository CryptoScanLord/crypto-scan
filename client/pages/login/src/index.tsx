import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { useLogin } from '@lib/auth-react'
import { TransactionsPage } from '@page/transactions'

export const LoginPage: FC = () => {
  const login = useLogin()

  // return (
  //   <Box display='flex' justifyContent='center' flexDirection='column' height='100dvh' alignItems='center'>
  //     <Button onClick={() => login()}>Login</Button>
  //   </Box>
  // )
  return <TransactionsPage />
}
