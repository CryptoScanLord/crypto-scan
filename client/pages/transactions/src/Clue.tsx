import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import React from 'react'

interface ClueProps {
  text: string[]
  exits: number
}

export const Clue = ({ text, exits }: ClueProps) => (
  <Tooltip
    title={text.map((el) => (
      <React.Fragment key={el}>
        {el}
        {`\n`}
      </React.Fragment>
    ))}
    arrow
  >
    <Box>{exits} exits</Box>
  </Tooltip>
)
