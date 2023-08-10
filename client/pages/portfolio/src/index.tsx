import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'

export const PortfolioPage: FC = () => {
  useAuthGuard()

  return <div />
}
