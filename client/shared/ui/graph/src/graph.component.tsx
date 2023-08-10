import { type FC, useMemo } from 'react'
import type { GraphProps } from './graph.interface'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import { useTheme } from '@mui/material/styles'
import { Tooltip } from './tooltip.component'

export const Graph: FC<GraphProps> = ({ data }) => {
  const { palette } = useTheme()
  const mappedData = useMemo(() => Object.entries(data).map(([time, y]) => ({ x: time, y })), [data])

  return (
    <ResponsiveLine
      data={[
        {
          id: 'data',
          data: mappedData,
        },
      ]}
      colors={palette.primary?.main}
      animate
      enableArea
      yScale={{
        type: 'linear',
        stacked: true,
        nice: 2,
      }}
      curve='monotoneX'
      enableGridX={false}
      enableGridY={false}
      enableSlices='x'
      sliceTooltip={Tooltip(mappedData)}
      defs={[
        linearGradientDef('gradientA', [
          { offset: 0, color: palette.primary.main },
          { offset: 100, color: palette.primary.main, opacity: 0 },
        ]),
      ]}
      fill={[{ match: '*', id: 'gradientA' }]}
    />
  )
}
