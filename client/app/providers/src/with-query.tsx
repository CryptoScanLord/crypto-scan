import type { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

export const withQuery = (Component: FC) => () => (
  <QueryClientProvider client={client}>
    <Component />
  </QueryClientProvider>
)
