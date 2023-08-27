import type { FC } from 'react'
import { withProviders } from '@app/providers'
import { Routes } from '@app/routes'
import Header from '@ui/header'
import Container from '@mui/material/Container'

const App: FC = () => (
  <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column' }}>
    <Header />
    <Routes />
  </Container>
)

export default withProviders(App)
