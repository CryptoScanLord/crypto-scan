import { FC, useState, useEffect } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { getTokens } from '@crawler/ordinals'

export const BRC20Page: FC = () => {
  useAuthGuard()

  return <div />
}
