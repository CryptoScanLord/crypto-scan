import { type FC, ChangeEvent, useCallback } from 'react'
import type { PaginationProps } from './pagination.interface'
import { PaginationItem } from '@mui/material'
import { Pagination as MuiPagination } from '@mui/material'

const Pagination: FC<PaginationProps> = ({ rows, setPage, rowsPerPage }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      setPage(value)
    },
    [setPage],
  )

  return (
    <MuiPagination
      onChange={handleChange}
      count={Math.ceil(rows.length / rowsPerPage)}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  )
}

export default Pagination
