import { FC } from 'react'
import { Graph } from '@ui/graph'

export const HomePage: FC = () => (
  <div style={{ height: '100vh' }}>
    <Graph
      data={{
        0: 1,
        1: 2,
        2: 3,
        3: 2,
        4: 1.5,
        5: 1.25,
      }}
    />
  </div>
)
