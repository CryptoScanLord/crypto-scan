import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'

export const BRC20Page: FC = () => {
  useAuthGuard()

  return <div />
}
