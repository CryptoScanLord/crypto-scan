import type { FC }              from 'react'
import      { ChangeEvent }     from 'react'
import      { useCallback }     from 'react'

import      MuiPagination       from '@mui/material/Pagination'
import      PaginationItem      from '@mui/material/PaginationItem'

import type { PaginationProps } from './pagination.interface'

export const Pagination: FC<PaginationProps> = ({ rows, setPage, rowsPerPage }) => {
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
