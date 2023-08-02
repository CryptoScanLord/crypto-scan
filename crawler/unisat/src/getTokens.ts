import { Tokens } from './publicTypes'
import { Res } from './privateTypes'

export async function getTokens(wallet: string) {
  const res: Res = await fetch(`https://unisat.io/brc20-api-v2/address/${wallet}/brc20/summary`).then((data) =>
    data.json(),
  )
  const tokens: Tokens[] = res.data.detail
  return tokens.filter((el) => el.overallBalance !== '0')
}
