import { FC } from 'react'
import { useAuthGuard, useSuspendSession } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from '@ui/container'
import { Pagination } from '@ui/pagination'

export const NFTsPage: FC = () => {
  useAuthGuard()

  const { wallet } = useParams()

  const navigate = useNavigate()

  const { access_token: token } = useSuspendSession()

  const { data } = useQuery({
    queryKey: ['nfts'],
    queryFn: () =>
      fetch(new URL(`nfts/${wallet}`, import.meta.env['API_URL']), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  })

  if (!data) {
    return <CircularProgress />
  }

  if (data?.status === 403) {
    navigate('/not-authorized')
  }

  return (
    <Container>
      <Pagination />
      <Table
        data={data}
        headerCells={['Inscription', 'Collection Name', 'Image Url', 'Total Spent', 'Floor Price']}
        subtitle=''
        title='NFTs'
      />
    </Container>
  )
}
