import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from '@crawler/blockchain'
import CircularProgress from '@mui/material/CircularProgress'
import PageContainer from '@ui/container'

export const TransactionsPage: FC = () => {
  useAuthGuard()

  const { data: transactions, isLoading: isTransactionsLoading } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: () =>
      getTransactions('bc1pcavtlcul2rcapxdr5dngafkcqcktv3wuj6rdqj40k952kqnf8qhqwrsax3', { limit: 0, offset: 0 }),
  })

  isTransactionsLoading && (
    <PageContainer sx={{ width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
    </PageContainer>
  )

  return (
    <PageContainer sx={{ height: '100dvh' }}>
      <Table data={[]} headerCells={[]} subtitle='' title='Transactions' />
    </PageContainer>
  )
}
