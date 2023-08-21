import React from 'react'
import type { PaginationProps } from './pagination.interface'
import { PaginationItem } from '@mui/material'
import { Pagination as MuiPagination } from '@mui/material'

const Pagination: React.FC<PaginationProps> = ({ rows, setPage, rowsPerPage }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  return (
    <MuiPagination
      onChange={handleChange}
      count={Math.ceil(rows.length / rowsPerPage)}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  )
}

export default Pagination
