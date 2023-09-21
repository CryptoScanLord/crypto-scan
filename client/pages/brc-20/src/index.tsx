import { FC, useState, useEffect } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { getTokens } from '@crawler/ordinals'

export const BRC20Page: FC = () => {
  useAuthGuard()

  const [s, sS] = useState([])

  const f = async () => {
    console.log(await getTokens('bc1pcavtlcul2rcapxdr5dngafkcqcktv3wuj6rdqj40k952kqnf8qhqwrsax3'))
  }

  useEffect(() => {
    f()
  }, [])

  return <div />
}
