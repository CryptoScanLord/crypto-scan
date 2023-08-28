import Container from '@mui/material/Container'
import { FC, PropsWithChildren } from 'react'

const PageContainer: FC<PropsWithChildren> = ({ children }) => (
  <Container component='div' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 1 }}>
    {children}
  </Container>
)

export default PageContainer
