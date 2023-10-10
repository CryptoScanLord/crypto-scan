import type { FC }                                from 'react'
import type { PropsWithChildren }                 from 'react'

import      CssBaseline                           from '@mui/material/CssBaseline'
import      GlobalStyles                          from '@mui/material/GlobalStyles'
import      { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import      { FontStyles }                        from '@theme/font'
import      { schema }                            from '@theme/schema'

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
