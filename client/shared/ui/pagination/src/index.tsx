import { FC } from 'react'
import Box from '@mui/material/Box'
import { useLocation, useNavigate } from 'react-router-dom'
import { Routes } from './privateTypes'
import { PaginationButton } from './paginationButton'

const Pagination: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Box display='inline-flex' padding='7px' border='1px solid #1e2340' borderRadius='10px' gap='5px'>
      <PaginationButton active={pathname === Routes.portfolio} onClick={() => navigate(Routes.portfolio)}>
        Portfolio
      </PaginationButton>
      <PaginationButton active={pathname === Routes.nfts} onClick={() => navigate(Routes.nfts)}>
        NFTs
      </PaginationButton>
      <PaginationButton active={pathname === Routes.brc20} onClick={() => navigate(Routes.brc20)}>
        BRC-20
      </PaginationButton>
      <PaginationButton active={pathname === Routes.transactions} onClick={() => navigate(Routes.transactions)}>
        Transactions
      </PaginationButton>
    </Box>
  )
}

export default Pagination
