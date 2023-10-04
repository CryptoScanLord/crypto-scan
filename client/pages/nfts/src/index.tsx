import { FC } from 'react'
import { useAuthGuard, useSuspendSession } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'
import { Container } from '@ui/container'
import Pagination from '@ui/pagination'

export const NFTsPage: FC = () => {
  useAuthGuard()
  const navigate = useNavigate()
  const { access_token: token } = useSuspendSession()
  const { data, isLoading } = useQuery({
    queryKey: ['nfts'],
    queryFn: () =>
      fetch('http://localhost:8000/nfts/bc1pa0q6l7nyej0dh588swm49j3ddgevgyuxe75s2qal8lv0drnw8epqde2pe2', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => ({
        data: await res.json(),
        status: res.status,
      })),
  })

  if (data?.status === 403) {
    navigate('/not-authorized')
  }

  if (isLoading) return <CircularProgress />
  return (
    <Container>
      <Pagination />
      <Table
        data={data?.data}
        headerCells={['Inscription', 'Collection Name', 'Image Url', 'Total Spent', 'Floor Price']}
        subtitle=''
        title='NFTs'
      />
    </Container>
  )
}
