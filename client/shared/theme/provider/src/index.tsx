import type { FC, PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { schema } from '@theme/schema'
import { FontStyles } from '@theme/font'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MuiThemeProvider theme={schema}>
    <CssBaseline />
    <FontStyles />
    {children}
  </MuiThemeProvider>
)
