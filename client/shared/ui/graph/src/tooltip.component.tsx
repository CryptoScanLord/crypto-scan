import type { FC } from 'react'
import type { SliceTooltipProps } from '@nivo/line'
import { Box } from '@mui/material'
import type { Datum } from '@nivo/line'

const dateIntl = Intl.DateTimeFormat(navigator.language, { dateStyle: 'short', timeStyle: 'medium' })
const currencyIntl = Intl.NumberFormat(navigator.language, { currency: 'USD', style: 'currency' })
const currencyDiffIntl = Intl.NumberFormat(navigator.language, {
  currency: 'USD',
  style: 'currency',
  signDisplay: 'exceptZero',
})

export const Tooltip =
  (data: Datum[]): FC<SliceTooltipProps> =>
  ({ slice }) => {
    const [point] = slice.points
    const key = point!.data.x as Date
    const value = point!.data.y as number
    const prevValue = (data[point!.index - 1]?.y ?? value) as number
    const diff = value - prevValue

    return (
      <Box
        sx={({ palette }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
          backgroundColor: `color-mix(in srgb, ${palette.background.paper}, transparent 50%)`,
          backdropFilter: 'blur(5px)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'divider',
          boxShadow: '0 0 15px 0 rgba(0,0,0,.3)',
          fontSize: '0.75rem',
          px: 1.5,
          py: 0.5,
        })}
      >
        <Box color={diff !== 0 ? (diff > 0 ? 'success.main' : 'error.main') : 'grey.500'}>
          {currencyDiffIntl.format(diff)}
        </Box>
        <Box fontWeight={900} color='grey.700'>
          {currencyIntl.format(value)}
        </Box>
        <Box color='grey.500' fontSize='0.6rem'>
          {dateIntl.format(key)}
        </Box>
      </Box>
    )
  }
