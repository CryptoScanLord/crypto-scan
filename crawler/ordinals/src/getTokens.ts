import { Volume, WalletRes } from './privateTypes'

export async function getTokens(wallet: string, volume: Volume) {
  const res: WalletRes = await fetch(`https://turbo.ordinalswallet.com/wallet/${wallet}`).then((data) => data.json())
  const filtered = res.brc20.filter((el) => el.available_balance > 0)
  const data = filtered.map(async (el) => {
    const volume: { volume24: string; allVolume: string } = await fetch(
      `${import.meta.env.PROD ? `` : `http://localhost:8000`}/brc-20/${el.ticker.toLowerCase()}/volume`,
    )
      .then((data) => data.json())
      .catch((e) => console.log(e))
    return {
      name: el.ticker,
      amount: el.available_balance,
      floorPrice: el.floor_price_per ? el.floor_price_per : 0,
      amountSpent: 'soon',
      volume24: Number(volume.volume24) / 100000000,
      volumeAll: Number(volume.allVolume) / 100000000,
    }
  })
  console.log(data)
  return data
}
