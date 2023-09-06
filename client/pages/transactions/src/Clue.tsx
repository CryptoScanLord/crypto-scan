import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

interface ClueProps {
  text: string[]
  exits: number
}

export const Clue = ({ text, exits }: ClueProps) => (
  <Tooltip
    title={text.map((el) => (
      <>
        {el}
        {`\n`}
      </>
    ))}
    arrow
  >
    <Box>{exits} exits</Box>
  </Tooltip>
)
