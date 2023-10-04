import { FC } from 'react'
import { useAuthGuard, useSuspendSession } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import { CircularProgress } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import Pagination from '@ui/pagination'
import { Container } from '@ui/container'

export const BRC20Page: FC = () => {
  useAuthGuard()

  const { access_token: token } = useSuspendSession()
  const params = useParams()
  const navigate = useNavigate()

  const { data: tokens, isLoading: isTokensLoading } = useQuery({
    queryKey: ['brc_20'],
    queryFn: async () => {
      const res = await fetch(
        new URL(`transactions/${wallet}`, import.meta.env.API_URL)
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((data) => data.json())
      return res
    },
  })

  if (tokens?.status === 403) {
    navigate('/not-authorized')
  }

  if (isTokensLoading) {
    return <CircularProgress />
  }

  return (
    <Container>
      <Pagination />
      <Table
        data={tokens ?? []}
        headerCells={['Name', 'Amount', 'Floor price', 'Amount spent', 'Volume 24H', 'Volume total']}
        title='BRC-20'
        subtitle=''
      />
    </Container>
  )
}
