import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => (
  <Box maxWidth='1200px' margin='0 auto' display='flex' justifyContent='center' flexDirection='column'>
    {children}
  </Box>
)

export default Container
