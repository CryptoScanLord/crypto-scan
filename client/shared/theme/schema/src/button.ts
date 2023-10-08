import type { ThemeOptions } from '@mui/material/styles'

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: 'revert',
    },
    contained: ({ theme }) => ({
      color: theme.palette.background.default,
    }),
  },
} satisfies NonNullable<ThemeOptions['components']>['MuiButton']
