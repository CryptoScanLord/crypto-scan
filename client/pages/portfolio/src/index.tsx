import { FC }                from 'react'

import Box                   from '@mui/material/Box'
import CircularProgress      from '@mui/material/CircularProgress'
import Typography            from '@mui/material/Typography'
import { useQuery }          from '@tanstack/react-query'
import { useNavigate }       from 'react-router-dom'
import { useParams }         from 'react-router-dom'

import { useAuthGuard }      from '@lib/auth-react'
import { useSuspendSession } from '@lib/auth-react'
import { Graph }             from '@ui/graph'
import { Pagination }        from '@ui/pagination'

const PortfolioPage: FC = () => {
	useAuthGuard()
	const navigate = useNavigate()

	const { access_token: token } = useSuspendSession()
	const { wallet } = useParams()

	const { data: history } = useQuery({
		queryKey: ['wallet_history'],
		queryFn: () =>
			fetch(new URL(`wallet/${wallet}/graph`, import.meta.env.ORDI_API_URL), {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => res.json()),
	})

	const { data: overall } = useQuery({
		queryKey: ['balance'],
		queryFn: () =>
			fetch(new URL(`overall/${wallet}`, import.meta.env.ORDI_API_URL), {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => res.json()),
	})

	if (!history || !overall) {
		return <CircularProgress />
	}

	console.log(history)

	if (history?.statusCode === 403 || overall?.statusCode === 403) {
		navigate('/not-authorized')
	}

	return (
		<Box flexGrow={1} display='flex' flexDirection='column'>
			<Pagination />
			<Box flexGrow={1} display='flex' flexDirection='column' py={4}>
				<Box display='flex' flexDirection='row' alignItems='end' width='max-width' justifyContent='space-between'>
					<Typography variant='h5'>Portfolio</Typography>
					<Typography variant='body1'>Balance: {overall.balance / 100000000} BTC</Typography>
				</Box>
				<Box
					sx={{
						height: '687px',
						flexGrow: 1,
						background: `#050424c0`,
						borderRadius: '10px',
						padding: '10px',
					}}
				>
					<Graph data={history ?? []} />
				</Box>
			</Box>
		</Box>
	)
}

export default PortfolioPage
