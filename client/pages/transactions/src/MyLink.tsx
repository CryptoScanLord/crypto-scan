import type { LinkProps } from '@mui/material'
import      { styled }    from '@mui/material/styles'
import      { Link }      from 'react-router-dom'

export const MyLink = styled(Link)<LinkProps>(() => ({
	color: `#f4f4fb`,
}))
