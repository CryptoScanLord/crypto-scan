import type { FC }            from 'react'

import      { withProviders } from '@app/providers'
import      { Routes }        from '@app/routes'
import      { Container }     from '@ui/container'
import      { Header }        from '@ui/header'

const App: FC = () => (
  <Container>
    <Header />
    <Routes />
  </Container>
)

export default withProviders(App)
