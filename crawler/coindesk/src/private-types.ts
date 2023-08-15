export type Entry = [time: number, value: number]

export interface PriceHistory {
  data: {
    entries: Entry[]
  }
}
