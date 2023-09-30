import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import { getTokens } from '@crawler/ordinals'
import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'

export const BRC20Page: FC = () => {
  useAuthGuard()

  const params = useParams()

  const { data: tokens, isLoading: isTokensLoading } = useQuery({
    queryKey: ['brc_20'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.PROD ? `` : `http://localhost:8000`}/transactions/${params['wallet']}`).then(data => data.json())
      return res
    },
  })

  if (isTokensLoading) {
    return <CircularProgress />
  }

  return (
    <Table
      data={tokens ?? []}
      headerCells={['Name', 'Amount', 'Floor price', 'Amount spent', 'Volume 24H', 'Volume total']}
      title='BRC-20'
      subtitle=''
    />
  )
}
