import { FC }                from 'react'

import Box                   from '@mui/material/Box'
import CircularProgress      from '@mui/material/CircularProgress'
import { useQuery }          from '@tanstack/react-query'
import { useNavigate }       from 'react-router-dom'
import { useParams }         from 'react-router-dom'

import { useAuthGuard }      from '@lib/auth-react'
import { useSuspendSession } from '@lib/auth-react'
import { Pagination }        from '@ui/pagination'
import { Table }             from '@ui/table'

interface NFTs {
  inscription: number
  collectionName: string
  imageUrl: string
  totalSpent: number
  floorPrice: number
}

export const NFTsPage: FC = () => {
  useAuthGuard()

  const { wallet } = useParams()

  const navigate = useNavigate()

  const { access_token: token } = useSuspendSession()

  const { data } = useQuery({
    queryKey: ['nfts'],
    queryFn: async () => {
      const response: NFTs[] = await fetch(new URL(`nfts/${wallet}`, import.meta.env.ORDI_API_URL), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())

      return response
        .filter((el) => el?.collectionName)
        .map((item) => ({
          inscription: item.inscription ?? '-',
          collectionName: item.collectionName,
          imageUrl: item.imageUrl ?? '',
          totalSpent: item.totalSpent ? item.totalSpent / 100000000 : '-',
          floorPrice: item.floorPrice ? item.floorPrice / 100000000 : '-',
        }))
    },
  })

  if (!data) {
    return <CircularProgress />
  }
  if ('statusCode' in data) {
    if (data.statusCode === 403) {
      navigate('/not-authorized')
    }
  }

  return (
    <Box flexGrow={1}>
      <Pagination />
      <Table
        data={data}
        headerCells={['Inscription', 'Collection Name', '', 'Total Spent', 'Floor Price']}
        subtitle=''
        title='NFTs'
      />
    </Box>
  )
}
