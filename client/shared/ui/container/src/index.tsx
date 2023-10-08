import MuiContainer from '@mui/material/Container'
import { FC, PropsWithChildren } from 'react'
import { ContainerProps } from '@mui/material/Container'

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, sx }) => (
  <MuiContainer component='div' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 1, ...sx }}>
    {children}
  </MuiContainer>
)
