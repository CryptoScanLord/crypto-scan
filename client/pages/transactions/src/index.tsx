import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'

export const TransactionsPage: FC = () => {
  useAuthGuard()

  return <div />
}
