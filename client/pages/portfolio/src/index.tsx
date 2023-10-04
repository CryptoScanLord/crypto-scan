import { FC } from 'react'
import { useAuthGuard, useSuspendSession } from '@lib/auth-react'
import { getOverall } from '@crawler/blockchain'
import { useQuery } from '@tanstack/react-query'
import { Graph } from '@ui/graph'
import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from '@ui/container'
import Pagination from '@ui/pagination'

const PortfolioPage: FC = () => {
  useAuthGuard()
  const navigate = useNavigate()

  const { access_token: token } = useSuspendSession()
  const { wallet } = useParams()

  const { data: history, isLoading: isGraphLoading } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: () =>
      fetch(new URL(`wallet/${wallet}/graph`, import.meta.env['API_URL']), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => ({
        data: await res.json(),
        status: res.status,
      })),
  })

  const { data: balance, isLoading: isBalanceLoading } = useQuery({
    queryKey: ['balance'],
    queryFn: () =>
      fetch(new URL(`overall/${wallet}`, import.meta.env['API_URL']), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  })

  if (history?.status === 403) {
    navigate('/not-authorized')
  }

  if (isGraphLoading || isBalanceLoading) {
    return <CircularProgress />
  }

  return (
    <Container>
      <Pagination />
      <Box flexGrow={1} display='flex' flexDirection='column' py={4}>
        <Box display='flex' flexDirection='row' alignItems='end' width='max-width' justifyContent='space-between'>
          <Typography variant='h5'>Portfolio</Typography>
          <Typography variant='body1'>Balance: {balance ? balance / 100000000 : 0} BTC</Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            background: `#050424c0`,
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          <Graph data={history?.data ?? []} />
        </Box>
      </Box>
    </Container>
  )
}
export default PortfolioPage
