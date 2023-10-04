import { FC, lazy, Suspense } from 'react'
import { Route, Routes as DOMRoutes } from 'react-router-dom'
import { LoginPage } from '@page/login'
import { NFTsPage } from '@page/nfts'
import { BRC20Page } from '@page/brc-20'
import { NotFoundPage } from '@page/not-found'
import { TransactionsPage } from '@page/transactions'
import { SearchPage } from '@page/search'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { NotAuthorizedPage } from '@page/not-authorized'

const PortfolioPage = lazy(() => import('@page/portfolio'))
export const Routes: FC = () => (
  <Suspense
    fallback={
      <Box height='100dvh' display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress />
      </Box>
    }
  >
    <DOMRoutes>
      <Route path='/' element={<SearchPage />} />
      <Route path='/portfolio/:wallet' element={<PortfolioPage /
      <Route path='/nfts/:wallet' element={<NFTsPage />} />
      <Route path='/brc-20/:wallet' element={<BRC20Page />} />
      <Route path='/transactions/:wallet' element={<TransactionsPage />} />
      <Route path='/not-authorized' element={<NotAuthorizedPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </DOMRoutes>
  </Suspense>
)
