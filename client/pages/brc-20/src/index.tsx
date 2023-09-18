import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import { getTokens } from '@crawler/unisat'

export const BRC20Page: FC = () => {
  useAuthGuard()

  const { data: tokens, isLoading: isTokensLoading } = useQuery({
    queryKey: ['brc_20'],
    queryFn: async () => {
      const res = await getTokens('bc1pcavtlcul2rcapxdr5dngafkcqcktv3wuj6rdqj40k952kqnf8qhqwrsax3').then((data) => data)
      return res
    },
  })

  console.log(tokens)

  return (
    <Table
      data={[]}
      headerCells={['Name', 'Amount', 'Floor price', 'Amount spent', 'Volume 24H', 'Volume total']}
      title='BRC-20'
      subtitle=''
    />
  )
}
