import { Dispatch, SetStateAction } from 'react'

export interface PaginationProps {
  rows: Record<string, string | number>[]
  rowsPerPage: number
  setPage: Dispatch<SetStateAction<number>>
}
