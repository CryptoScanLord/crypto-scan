import type { FC } from 'react'
import { withProviders } from '@app/providers'
import { Routes } from '@app/routes'
import Header from '@ui/header'
import { Container } from '@ui/container'

const App: FC = () => (
  <Container>
    <Header />
    <Routes />
  </Container>
)

export default withProviders(App)
