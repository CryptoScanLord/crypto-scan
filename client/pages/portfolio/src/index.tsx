import { FC } from 'react'
import { useAuthGuard, useSuspendSession } from '@lib/auth-react'
import { getOverall } from '@crawler/blockchain'
import { useQuery } from '@tanstack/react-query'
import { Graph } from '@ui/graph'
import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import { Container } from '@ui/container'
import Pagination from '@ui/pagination'

const PortfolioPage: FC = () => {
  useAuthGuard()

  const { access_token: token } = useSuspendSession()
  const params = useParams()

  const { data: history, isLoading: isGraphLoading } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: () =>
      fetch(`http://localhost:8000/wallet/${params['wallet']}/graph`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  })

  const { data: balance, isLoading: isBalanceLoading } = useQuery({
    queryKey: ['balance'],
    queryFn: () => getOverall(`${params['wallet']}`).then((res) => res.balance),
  })

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
          <Graph data={history ?? []} />
        </Box>
      </Box>
    </Container>
  )
}
export default PortfolioPage
