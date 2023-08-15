import type { ThemeOptions } from '@mui/material'

export const MuiInput = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '4px 10px 4px 10px',
      color: `${theme.palette.text}`,
      fontWeight: 'lighter',
      fontSize: 'small',
      borderRadius: '8px',
      backgroundColor: `${theme.palette.background.paper}`,
      border: `solid 1px ${theme.palette.divider}`,
      ':before': {
        content: 'none',
      },
      ':after': {
        transition: 'none',
        border: 'none',
      },
    }),
  },
} satisfies NonNullable<ThemeOptions['components']>['MuiInput']
