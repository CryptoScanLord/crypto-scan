import { FC } from 'react'
import { useAuthGuard, useSuspendSession } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { MyLink } from './MyLink'
import { Clue } from './Clue'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from '@ui/container'
import Pagination from '@ui/pagination'

export const TransactionsPage: FC = () => {
  useAuthGuard()

  const { access_token: token } = useSuspendSession()
  const { wallet } = useParams()
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: async () =>
      fetch(new URL(`transactions/${wallet}`, import.meta.env['API_URL']), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(async (res) =>
          res.map((el: any) => {
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
        ),
  })

  if (!data) {
    return <CircularProgress />
  }

  if (data?.status === 403) {
    navigate('/not-authorized')
  }

  return (
    <Container>
      <Pagination />
      <Table
        data={data}
        headerCells={['Transaction hash', 'Method', 'From', 'To', 'Value']}
        subtitle=''
        title='Transactions'
      />
    </Container>
  )
}
