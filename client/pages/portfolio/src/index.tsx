import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { getOverall } from '@crawler/blockchain'
import { useQuery } from '@tanstack/react-query'
import { Graph } from '@ui/graph'
import PageContainer from '@ui/container'
import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'

const PortfolioPage: FC = () => {
  useAuthGuard()

  const params = useParams()

  const { data: history, isLoading: isGraphLoading } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: () =>
      fetch('http://localhost:8000/wallet/1FfmbHfnpaZjKFvyi1okTjJJusN455paPH/graph').then((res) => res.json()),
  })

  const { data: balance, isLoading: isBalanceLoading } = useQuery({
    queryKey: ['balance'],
    queryFn: async () => {
      return await getOverall('' /* params here */).then((res) => res.balance)
    },
  })

  return isGraphLoading || isBalanceLoading ? (
    <PageContainer sx={{ width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
    </PageContainer>
  ) : (
    <PageContainer sx={{ gap: '0px', alignItems: 'center' }}>
      <Box>
        <Box display='flex' flexDirection='row' alignItems='end' width='max-width' justifyContent='space-between'>
          <Typography variant='h5'>Portfolio</Typography>
          <Typography variant='body1'>Balacne: {balance ? balance / 100000000 : 0} BTC</Typography>
        </Box>
        <div
          style={{
            width: '90vw',
            height: '90vh',
            background: `#050424c0`,
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          <Graph data={history ?? []} />
        </div>
      </Box>
    </PageContainer>
  )
}
export default PortfolioPage
