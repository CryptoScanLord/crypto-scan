import type { FC } from 'react'
import { withProviders } from '@app/providers'
import { Routes } from '@app/routes'

const App: FC = () => <Routes />

export default withProviders(App)
