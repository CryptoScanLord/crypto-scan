import React, { FC, MouseEvent, useState, useEffect } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Pagination: FC = () => {
  const { pathname } = useLocation()

  type routes = '/portfolio' | '/nfts' | '/brc-20' | '/transactions' | '/login'

  const [value, setValue] = useState<routes | null>(pathname as routes)

  const handleChange = (event: MouseEvent<HTMLElement>, newPage: routes | null) => {
    setValue(newPage)
  }

  useEffect(() => {
    if (value === null) {
      setValue(pathname as routes)
    }
  }, [value])

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
      <ToggleButton value='/login' aria-label='login page'>
        login
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default Pagination
