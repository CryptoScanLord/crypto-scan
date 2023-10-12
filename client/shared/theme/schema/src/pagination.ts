import type { ThemeOptions } from '@mui/material/styles'

export const MuiPagination = {
	styleOverrides: {
		root: ({ theme }) => ({
			display: 'flex',
			width: '100%',
			border: `1px solid ${theme.palette.divider}`,
			borderTop: 'none',
			backgroundColor: theme.palette.background.paper,
			borderRadius: '0 0 15px 15px',
			padding: '15px 15px',
		}),
		ul: ({ theme }) => ({
			width: '100%',
			display: 'flex',
			gap: '3px',
			justifyContent: 'center',
			position: 'relative',
			'& li button:hover': {
				backgroundColor: `${theme.palette.primary.main}`,
				borderRadius: '10px',
				transition: 'color 2s',
			},
			'& li div': {
				padding: '10px 15px',
			},
			'& li:first-of-type': {
				position: 'absolute',
				left: 0,
				'& button': {
					padding: '0',
					borderRadius: '50%',
				},
			},
			'& li:last-child': {
				position: 'absolute',
				right: 0,
				'& button': {
					padding: '0',
					borderRadius: '50%',
				},
			},
		}),
	},
} satisfies NonNullable<ThemeOptions['components']>['MuiPagination']

export const MuiPaginationItem = {
	styleOverrides: {
		root: ({ theme }) => ({
			color: 'white',
			background: 'rgb(176, 176, 176, 0.1)',
			borderRadius: '10px',
			padding: '22px 18px',
			fontWeight: 'normal',
			'&.Mui-selected': {
				backgroundColor: `${theme.palette.primary.main}`,
			},
			'&.Mui-selected:hover': {
				backgroundColor: `${theme.palette.primary.main}`,
				borderRadius: '10px',
				transition: 'color 2s',
			},
		}),
	},
} satisfies NonNullable<ThemeOptions['components']>['MuiPaginationItem']
