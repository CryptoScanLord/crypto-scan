import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import { Container } from '@ui/container'
import Pagination from '@ui/pagination'

export const NFTsPage: FC = () => {
  useAuthGuard()
  const params = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['nfts'],
    queryFn: () => fetch(`http://localhost:8000/nfts/${params['wallet']}`).then((res) => res.json()),
  })

  if (isLoading) return <CircularProgress />
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
