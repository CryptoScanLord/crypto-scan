import type { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { MuiInput } from './input'
import { MuiPagination, MuiPaginationItem } from './pagination'
import { MuiPaper, MuiTableCell, MuiTableRow } from './table'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    sm: false
  }
}

const primary = '#7b61ff'
const text = '#f4f4fb'
const background = '#060b27'
const paper = '#0a0f2c'
const green = '#30f29b'
const red = '#ff3a4a'
const midgray = '#616787'
const lightgray = '#98a4c0'
const divider = '#1e2340'

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
    fontFamily: 'mabry',
  },
  shape: {
    borderRadius: 3,
  },
} satisfies ThemeOptions

export const palette = {
  palette: {
    primary: {
      main: primary,
    },
    error: {
      main: red,
    },
    success: {
      main: green,
    },
    grey: {
      500: midgray,
      700: lightgray,
    },
    background: {
      default: background,
      paper,
    },
    divider,
    text: {
      primary: text,
    },
  },
} satisfies ThemeOptions

const components = {
  components: {
    MuiInput,
    MuiPagination,
    MuiPaginationItem,
    MuiTableCell,
    MuiTableRow,
    MuiPaper,
  },
} satisfies ThemeOptions

export const schema = createTheme({ ...base, ...palette, ...components })
