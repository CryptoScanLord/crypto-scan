import { ButtonBase, ButtonBaseProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface PaginationButtonProps extends ButtonBaseProps {
  active: boolean
}

export const PaginationButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active',
})<PaginationButtonProps>(({ active, theme }) => ({
  color: theme.palette.grey[700],
  padding: '5px 7px 5px 7px',
  borderRadius: '5px',
  fontFamily: 'inherit',
  transition: theme.transitions.create(['background-color'], {
    duration: '0.5s',
  }),
  ':hover': {
    backgroundColor: theme.palette.divider,
  },
  ...(active && {
    color: theme.palette.text,
    backgroundColor: theme.palette.primary.light,
    ':hover': {
      backgroundColor: theme.palette.primary.light,
    },
  }),
}))
