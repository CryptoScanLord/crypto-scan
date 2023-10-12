import type { FC }            from 'react'

import      { ThemeProvider } from '@theme/provider'

export const withTheme = (Component: FC) => () => (
	<ThemeProvider>
		<Component />
	</ThemeProvider>
)
