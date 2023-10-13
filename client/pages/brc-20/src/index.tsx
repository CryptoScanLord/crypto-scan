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

export const BRC20Page: FC = () => {
	useAuthGuard()

	const { access_token: token } = useSuspendSession()
	const { wallet } = useParams()
	const navigate = useNavigate()

	const { data } = useQuery({
		queryKey: ['brc_20'],
		queryFn: () =>
			fetch(new URL(`tokens/${wallet}`, import.meta.env.ORDI_API_URL), {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => res.json()),
	})

	console.log(data)

	if (!data) {
		return <CircularProgress />
	}

	if (data?.statusCode === 403) {
		navigate('/not-authorized')
	}

	return (
		<Box flexGrow={1}>
			<Pagination />
			<Table
				data={data}
				headerCells={['Name', 'Amount', 'Floor price', 'Amount spent', 'Volume 24H', 'Volume total']}
				title='BRC-20'
				subtitle=''
			/>
		</Box>
	)
}
