import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from '@crawler/blockchain'
import CircularProgress from '@mui/material/CircularProgress'
import PageContainer from '@ui/container'
import { Link } from 'react-router-dom'

export const TransactionsPage: FC = () => {
  useAuthGuard()

  const { data: transactions, isLoading: isTransactionsLoading } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: () =>
      getTransactions('bc1pcavtlcul2rcapxdr5dngafkcqcktv3wuj6rdqj40k952kqnf8qhqwrsax3', { limit: 0, offset: 0 }).then(
        (data) =>
          data.map((el) => {
            const method = el.delta > 0 ? 'Incoming' : 'Outgoing'
            const from =
              el.inputs.length > 1 ? (
                `${el.inputs.length} exits`
              ) : (
                <Link to={`/${el.inputs[0]}`}>
                  {el.inputs[0]?.slice(0, 4)}-{el.inputs[0]?.slice(-4)}
                </Link>
              )
            const to =
              el.outputs.length > 1 ? (
                `${el.outputs.length} exits`
              ) : (
                <Link style={{ textDecoration: 'none' }} to={`/${el.outputs[0]}`}>
                  {el.outputs[0]?.slice(0, 4)}-{el.outputs[0]?.slice(-4)}
                </Link>
              )
            return {
              hash: (
                <Link to={`https://www.blockchain.com/explorer/transactions/btc/${el.id}`}>
                  {el.id.slice(0, 4)}-{el.id.slice(-4)}
                </Link>
              ),
              method: method,
              from: from,
              to: to,
              value: `${el.delta / 100000000} BTC`,
            }
          }),
      ),
  })

  isTransactionsLoading && (
    <PageContainer sx={{ width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
    </PageContainer>
  )

  return (
    <PageContainer sx={{ height: '100dvh' }}>
      <Table
        data={transactions ? transactions : []}
        headerCells={['Transaction hash', 'Method', 'From', 'To', 'Value']}
        subtitle=''
        title='Transactions'
      />
    </PageContainer>
  )
}
