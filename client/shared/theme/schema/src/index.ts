import type { ThemeOptions }      from '@mui/material/styles'
import      { createTheme }       from '@mui/material/styles'

import      { MuiButton }         from './button'
import      { MuiInput }          from './input'
import      { MuiPagination }     from './pagination'
import      { MuiPaginationItem } from './pagination'
import      { MuiPaper }          from './table'
import      { MuiTableCell }      from './table'
import      { MuiTableRow }       from './table'

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		sm: false
	}
}

const primary = '#7b61ff'
const lightPrimary = '#1B224A'
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
			light: lightPrimary,
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
		MuiButton,
	},
} satisfies ThemeOptions

export const schema = createTheme({ ...base, ...palette, ...components })
