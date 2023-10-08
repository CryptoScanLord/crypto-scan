import type { ThemeOptions } from '@mui/material/styles'

export const MuiTableCell = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '10px 20px',
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
    head: ({ theme }) => ({
      color: `${theme.palette.grey[500]}`,
      fontWeight: 'bold',
      fontSize: '0.75rem',
    }),
    body: {
      fontSize: '0.95rem',
      padding: '15px 20px',
    },
  },
} satisfies NonNullable<ThemeOptions['components']>['MuiTableCell']

export const MuiTableRow = {
  styleOverrides: {
    root: {
      padding: '10px',
    },
  },
}

export const MuiPaper = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '15px 15px 0 0',
    }),
  },
} satisfies NonNullable<ThemeOptions['components']>['MuiPaper']
