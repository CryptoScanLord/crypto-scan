import { FC }               from 'react'

import Box                  from '@mui/material/Box'
import { useLocation }      from 'react-router-dom'
import { useNavigate }      from 'react-router-dom'
import { useParams }        from 'react-router-dom'

import { PaginationButton } from './paginationButton'
import { Routes }           from './privateTypes'

export const Pagination: FC = () => {
	const { pathname } = useLocation()
	const { wallet } = useParams()
	const navigate = useNavigate()

	return (
		<Box>
			<Box display='inline-flex' padding='7px' border='1px solid #1e2340' borderRadius='10px' gap='5px'>
				<PaginationButton
					active={pathname === `${Routes.portfolio}/${wallet}`}
					onClick={() => navigate(`${Routes.portfolio}/${wallet}`)}
				>
					Portfolio
				</PaginationButton>
				<PaginationButton
					active={pathname === `${Routes.nfts}/${wallet}`}
					onClick={() => navigate(`${Routes.nfts}/${wallet}`)}
				>
					NFTs
				</PaginationButton>
				<PaginationButton
					active={pathname === `${Routes.brc20}/${wallet}`}
					onClick={() => navigate(`${Routes.brc20}/${wallet}`)}
				>
					BRC-20
				</PaginationButton>
				<PaginationButton
					active={pathname === `${Routes.transactions}/${wallet}`}
					onClick={() => navigate(`${Routes.transactions}/${wallet}`)}
				>
					Transactions
				</PaginationButton>
			</Box>
		</Box>
	)
}
