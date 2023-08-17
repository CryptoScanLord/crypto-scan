import React, { FC, MouseEvent, useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const Pagination: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  type Routes = '/portfolio' | '/nfts' | '/brc-20' | '/transactions'

  const [value, setValue] = useState<Routes | null>(pathname as Routes)

  const handleChange = (event: MouseEvent<HTMLElement>, newPage: Routes | null) => {
    if (newPage !== null) {
      setValue(newPage)
      navigate(newPage)
    }
  }

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleChange} aria-label='change page'>
      <ToggleButton value='/portfolio' aria-label='portfolio page'>
        Portfolio
      </ToggleButton>
      <ToggleButton value='/nfts' aria-label='nfts page'>
        NFTs
      </ToggleButton>
      <ToggleButton value='/brc-20' aria-label='brc-20 page'>
        BRC-20
      </ToggleButton>
      <ToggleButton value='/transactions' aria-label='transactions page'>
        Transactions
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default Pagination
