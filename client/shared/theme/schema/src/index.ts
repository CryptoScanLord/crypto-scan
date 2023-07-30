import type { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    sm: false
  }
}

export const base = {
  breakpoints: {
    values: {
      xs: 0,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: (abs: number) => `${abs * 6}px`,
  transitions: {
    duration: {
      standard: 300,
    },
  },
  typography: {
    fontSize: 16,
  },
  shape: {
    borderRadius: 3,
  },
} satisfies ThemeOptions

export const schema = createTheme({ ...base })
