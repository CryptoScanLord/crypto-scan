import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

interface ClueProps {
  text: string[]
  exits: number
}

export const Clue = ({ text, exits }: ClueProps) => (
  <Tooltip
    title={text.map((el) => (
      <Box key={Math.random()}>
        {el}
        {`\n`}
      </Box>
    ))}
    arrow
  >
    <Box width='max-content'>{exits} exits</Box>
  </Tooltip>
)
