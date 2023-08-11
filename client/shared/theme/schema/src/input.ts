import type { ThemeOptions } from '@mui/material'

export const MuiInput = {
  styleOverrides: {
    root: {
      padding: '4px 10px 4px 10px',
      color: '#8F9BB7',
      fontWeight: 'lighter',
      fontSize: 'small',
      borderRadius: '8px',
      backgroundColor: '#0E1330',
      border: 'solid 1px #222745',
      ':before': {
        content: 'none',
      },
      ':after': {
        transition: 'none',
        border: 'none',
      },
    },
  },
} satisfies NonNullable<ThemeOptions['components']>['MuiInput']
