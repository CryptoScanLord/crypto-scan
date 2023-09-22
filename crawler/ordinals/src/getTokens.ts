import { WalletRes } from './privateTypes'

export async function getTokens(wallet: string, volume: Record<string, string>) {
  const res: WalletRes = await fetch(`https://turbo.ordinalswallet.com/wallet/${wallet}`).then((data) => data.json())
  const filtered = res.brc20.filter((el) => el.available_balance > 0)
  const data = filtered.map(async (el, index) => ({
    index: index + 1,
    name: el.ticker,
    amount: el.available_balance,
    floorPrice: el.floor_price_per ? el.floor_price_per : 0,
    volume24: volume.volume24,
    volumeAll: volume.volumeAll,
  }))
  return data
}
