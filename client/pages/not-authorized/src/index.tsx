import { FC }          from 'react'

import Box             from '@mui/material/Box'
import Button          from '@mui/material/Button'
import Typography      from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

export const NotAuthorizedPage: FC = () => {
	const navigate = useNavigate()
	return (
		<Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' gap='15px' flexGrow={1}>
			<Typography variant='h1' fontWeight='bold'>
				403
			</Typography>
			<Typography fontSize='1.5rem'>NOT AUTHORIZED</Typography>
			<Typography>Sorry, you need to get a role to access</Typography>
			<Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => navigate('/')}>
				Go to Home Page
			</Button>
		</Box>
	)
}
