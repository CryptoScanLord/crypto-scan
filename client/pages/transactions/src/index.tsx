import { FC }                from 'react'

import Box                   from '@mui/material/Box'
import CircularProgress      from '@mui/material/CircularProgress'
import { useQuery }          from '@tanstack/react-query'
import { useNavigate }       from 'react-router-dom'
import { useParams }         from 'react-router-dom'

import { useAuthGuard }      from '@lib/auth-react'
import { useSuspendSession } from '@lib/auth-react'
import { Pagination }        from '@ui/pagination'
import { Table }             from '@ui/table'

import { Clue }              from './Clue'
import { MyLink }            from './MyLink'

export const TransactionsPage: FC = () => {
	useAuthGuard()

	const { access_token: token } = useSuspendSession()
	const { wallet } = useParams()
	const navigate = useNavigate()

	const { data, isLoading } = useQuery({
		queryKey: ['wallet_history'],
		queryFn: async () =>
			fetch(new URL(`transactions/${wallet}`, import.meta.env.ORDI_API_URL), {
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
					})),
	})

	if (isLoading) {
		return <CircularProgress />
	}

	if (data?.statusCode === 403) {
		navigate('/not-authorized')
	}

	console.log(data)

	return (
		<Box flexGrow={1}>
			<Pagination />
			<Table
				data={data}
				headerCells={['Transaction hash', 'Method', 'From', 'To', 'Value']}
				subtitle=''
				title='Transactions'
			/>
		</Box>
	)
}
