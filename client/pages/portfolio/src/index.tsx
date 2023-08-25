import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { useQuery } from '@tanstack/react-query'
import { Graph } from '@ui/graph'

const PortfolioPage: FC = () => {
  useAuthGuard()

  const { data: history } = useQuery({
    queryKey: ['wallet_history'],
    queryFn: () =>
      fetch('http://localhost:8000/wallet/1FfmbHfnpaZjKFvyi1okTjJJusN455paPH/graph').then((res) => res.json()),
  })

  return (
    <div style={{ width: '90vw', height: '90vh' }}>
      <Graph data={history ?? []} />
    </div>
  )
}
export default PortfolioPage
