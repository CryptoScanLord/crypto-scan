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

  console.log(transactions)

  const dataTx = transactions?.map((el) => {
    const method = el.delta > 0 ? 'Incoming' : 'Outgoing'
    const from: string = el.inputs.length > 1 ? `${el.inputs.length} exits` : `${el.inputs[0]}`
    const to: string = el.outputs.length > 1 ? `${el.outputs.length} exits` : `${el.outputs[0]}`
    return { hash: el.id, method: method, from: from, to: to, value: el.delta }
  })

  isTransactionsLoading && (
    <PageContainer sx={{ width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
    </PageContainer>
  )

  return (
    <PageContainer sx={{ height: '100dvh' }}>
      <Table
        data={dataTx ? dataTx : []}
        headerCells={['Transaction hash', 'Method', 'From', 'To', 'Value']}
        subtitle=''
        title='Transactions'
      />
    </PageContainer>
  )
}
