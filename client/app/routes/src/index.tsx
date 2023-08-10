import { FC } from 'react'
import { Route, Routes as DOMRoutes } from 'react-router-dom'
import { PortfolioPage } from '@page/portfolio'
import { LoginPage } from '@page/login'
import { NFTsPage } from '@page/nfts'
import { BRC20Page } from '@page/brc-20'
import { NotFoundPage } from '@page/not-found'
import { TransactionsPage } from '@page/transactions'

export const Routes: FC = () => (
  <DOMRoutes>
    <Route path='/' element={<PortfolioPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/nfts' element={<NFTsPage />} />
    <Route path='/brc-20' element={<BRC20Page />} />
    <Route path='/transactions' element={<TransactionsPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </DOMRoutes>
)
