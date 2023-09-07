import MuiContainer from '@mui/material/Container'
import { FC, PropsWithChildren } from 'react'
import { ContainerProps } from '@mui/material/Container'

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, sx }) => (
  <MuiContainer component='div' sx={{ display: 'flex', flexDirection: 'column', gap: 1, minHeight: '100dvh', ...sx }}>
    {children}
  </MuiContainer>
)
