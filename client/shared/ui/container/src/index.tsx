import Container from '@mui/material/Container'
import { FC, PropsWithChildren } from 'react'
import { ContainerProps } from '@mui/material/Container'

const PageContainer: FC<PropsWithChildren<ContainerProps>> = ({ children, sx }) => (
  <Container component='div' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 1, ...sx }}>
    {children}
  </Container>
)

export default PageContainer
