import * as Prv from './private-types.js'
import * as Pub from './public-types.js'

export async function getPriceHistory(start: Date, end: Date): Promise<Pub.History> {
  const isoStart = start.toISOString()
  const isoEnd = end.toISOString()

  const url = new URL('https://production.api.coindesk.com/v2/tb/price/values/BTC')

  url.searchParams.append('start_date', isoStart)
  url.searchParams.append('end_date', isoEnd)
  url.searchParams.append('ohlc', 'false')

  const {
    data: { entries },
  }: Prv.PriceHistory = await fetch(url).then((res) => res.json())

  return entries
}
