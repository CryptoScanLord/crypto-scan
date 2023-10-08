import type { FC, PropsWithChildren } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { schema } from '@theme/schema'
import { FontStyles } from '@theme/font'
import GlobalStyles from '@mui/material/GlobalStyles'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MuiThemeProvider theme={schema}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        'html, body, #root': {
          minHeight: '100vh',
          zIndex: 1,
        },
      }}
    />
    <FontStyles />
    {children}
  </MuiThemeProvider>
)
