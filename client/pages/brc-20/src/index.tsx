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
  const { wallet } = useParams()
  const navigate = useNavigate()

  const { data: tokens, isLoading: isTokensLoading } = useQuery({
    queryKey: ['brc_20'],
    queryFn: () =>
      fetch(new URL(`tokens/${wallet}`, import.meta.env['API_URL']), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res: any) => ({
        data: await res.json(),
        status: res.status,
      })),
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
        data={tokens?.data}
        headerCells={['Name', 'Amount', 'Floor price', 'Amount spent', 'Volume 24H', 'Volume total']}
        title='BRC-20'
        subtitle=''
      />
    </Container>
  )
}
