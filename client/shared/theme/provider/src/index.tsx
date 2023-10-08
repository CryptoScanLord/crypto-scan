import type { FC, PropsWithChildren } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { schema } from '@theme/schema'
import { FontStyles } from '@theme/font'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MuiThemeProvider theme={schema}>
    <CssBaseline />
    <FontStyles />
    {children}
  </MuiThemeProvider>
)
