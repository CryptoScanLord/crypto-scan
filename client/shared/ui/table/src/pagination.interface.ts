export interface PaginationProps {
  rows: {
    [key: string]: string | number
  }[]
  rowsPerPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
