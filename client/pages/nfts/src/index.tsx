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

export const NFTsPage: FC = () => {
  useAuthGuard()

  const { wallet } = useParams()

  const navigate = useNavigate()

  const { access_token: token } = useSuspendSession()

  const { data } = useQuery({
    queryKey: ['nfts'],
    queryFn: () =>
      fetch(new URL(`nfts/${wallet}`, import.meta.env.ORDI_API_URL), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  })

  if (!data) {
    return <CircularProgress />
  }

  if (data?.statusCode === 403) {
    navigate('/not-authorized')
  }

  return (
    <Box flexGrow={1}>
      <Pagination />
      <Table
        data={data}
        headerCells={['Inscription', 'Collection Name', 'Image Url', 'Total Spent', 'Floor Price']}
        subtitle=''
        title='NFTs'
      />
    </Box>
  )
}
