import { type FC, useMemo } from 'react'
import type { GraphProps } from './graph.interface'
import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'
import { useTheme } from '@mui/material/styles'
import { Tooltip } from './tooltip.component'

export const Graph: FC<GraphProps> = ({ data }) => {
  const { palette } = useTheme()
  const mappedData = useMemo(
    () =>
      data
        .map(([time, y]) => [new Date(time), y] as [Date, number])
        .sort(([a], [b]) => a.getTime() - b.getTime())
        .map(([time, y], idx) => [new Date(time.getTime() + idx), y])
        .map(([x, y]) => ({ x, y })),
    [data],
  )

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
      xScale={{
        type: 'time',
        format: 'native',
      }}
      axisBottom={{
        format: '%b %d',
      }}
      curve='basis'
      enableGridX={false}
      enableGridY={false}
      enableSlices='x'
      sliceTooltip={Tooltip(mappedData)}
      pointSize={0}
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
