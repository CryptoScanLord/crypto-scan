import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'

export const NFTsPage: FC = () => {
  useAuthGuard()

  return <div />
}
