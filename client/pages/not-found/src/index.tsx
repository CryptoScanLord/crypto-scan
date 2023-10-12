import { FC }          from 'react'

import Box             from '@mui/material/Box'
import Button          from '@mui/material/Button'
import Typography      from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage: FC = () => {
	const navigate = useNavigate()
	return (
		<Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' gap='15px' flexGrow={1}>
			<Typography variant='h1' fontWeight='bold'>
				404
			</Typography>
			<Typography fontSize='1.5rem'>PAGE NOT FOUND</Typography>
			<Typography>Sorry, the page you`re looking for cannot be found.</Typography>
			<Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => navigate('/')}>
				Go to Home Page
			</Button>
		</Box>
	)
}
