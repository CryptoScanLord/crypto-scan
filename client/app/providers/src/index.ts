import type { FC } from 'react'
import { withRouter } from './with-router'
import { withTheme } from './with-theme'

export const withProviders = (component: FC) => withRouter(withTheme(component))
