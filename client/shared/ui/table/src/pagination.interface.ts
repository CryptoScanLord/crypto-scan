import { Dispatch, ReactNode, SetStateAction } from 'react'

type Component = {
  component: ReactNode
}
export interface PaginationProps {
  rows: Record<string, string | number | Component>[]
  rowsPerPage: number
  setPage: Dispatch<SetStateAction<number>>
}
