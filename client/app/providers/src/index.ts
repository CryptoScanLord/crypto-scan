import type { FC } from 'react'
import { withRouter } from './with-router'
import { withTheme } from './with-theme'
import { withQuery } from './with-query'

export const withProviders = (component: FC) => withRouter(withTheme(withQuery(component)))
