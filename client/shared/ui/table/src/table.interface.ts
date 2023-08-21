export interface TableProps {
  data: {
    [key: string]: string | number
  }[]
  headerCells: string[]
  title: string
  subtitle: string
}
