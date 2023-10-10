import { Dispatch }       from 'react'
import { SetStateAction } from 'react'

export interface PaginationProps {
  rows: Record<string, string | number | JSX.Element>[]
  rowsPerPage: number
  setPage: Dispatch<SetStateAction<number>>
}
