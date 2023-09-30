import { FC } from 'react'
import { useAuthGuard } from '@lib/auth-react'
import { Table } from '@ui/table'
import { useQuery } from '@tanstack/react-query'
import CircularProgress from '@mui/material/CircularProgress'

export const NFTsPage: FC = () => {
  useAuthGuard()

  const { data, isLoading } = useQuery({
    queryKey: ['nfts'],
    queryFn: () =>
      fetch('http://localhost:8000/nfts/bc1pa0q6l7nyej0dh588swm49j3ddgevgyuxe75s2qal8lv0drnw8epqde2pe2').then((res) =>
        res.json(),
      ),
  })

  if (isLoading) return <CircularProgress />
  return (
    <Table
      data={data}
      headerCells={['Inscription', 'Collection Name', 'Image Url', 'Total Spent', 'Floor Price']}
      subtitle=''
      title='NFTs'
    />
  )
}
