import { ReactNode } from 'react'

type Component = {
  component: ReactNode
}

export interface TableProps {
  data: Record<string, string | number | Component>[]
  headerCells: string[]
  title: string
  subtitle: string
}
