import React, { FC, MouseEvent, useState } from 'react'
import { Box, ButtonBase } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Routes } from './privateTypes'

const Pagination: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()


  return (
    <Box>
      <ButtonBase>Portfolio</ButtonBase>
      <ButtonBase>NFTs</ButtonBase>
      <ButtonBase>BRC-20</ButtonBase>
      <ButtonBase>Transactions</ButtonBase>
    </Box>
  )
}

export default Pagination
