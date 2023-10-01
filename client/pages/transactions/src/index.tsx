import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { MyLink } from './MyLink'
import { Clue } from './Clue'
import { useParams } from 'react-router-dom'

export const TransactionsPage: FC = () => {
  useAuthGuard()

  const params = useParams()

  const { data: transactions, isLoading: isTransactionsLoading } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.PROD ? `` : `http://localhost:8000`}/transactions/${params['wallet']}`)
        .then((data) => data.json())
        .then(async (data) =>
          data.map((el: any) => {
            const method = el.delta > 0 ? 'Incoming' : 'Outgoing'
            const from =
              el.inputs.length > 1 ? (
                <Clue text={el.inputs} exits={el.inputs.length} />
              ) : (
                <MyLink to={`/${el.inputs[0]}`}>
                  {el.inputs[0]?.slice(0, 4)}-{el.inputs[0]?.slice(-4)}
                </MyLink>
              )
            const to =
              el.outputs.length > 1 ? (
                <Clue text={el.outputs} exits={el.outputs.length} />
              ) : (
                <MyLink to={`/${el.outputs[0]}`}>
                  {el.outputs[0]?.slice(0, 4)}-{el.outputs[0]?.slice(-4)}
                </MyLink>
              )
            return {
              hash: (
                <MyLink to={`https://www.blockchain.com/explorer/transactions/btc/${el.id}`}>
                  {el.id.slice(0, 4)}-{el.id.slice(-4)}
                </MyLink>
              ),
              method,
              from,
              to,
              value: `${el.delta / 100000000} BTC`,
            }
          }),
        )
      return res
    },
  })

  if (isTransactionsLoading) return <CircularProgress />

  return (
    <Table
      data={transactions ?? []}
      headerCells={['Transaction hash', 'Method', 'From', 'To', 'Value']}
      subtitle=''
      title='Transactions'
    />
  )
}
