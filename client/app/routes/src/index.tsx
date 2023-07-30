import { FC } from 'react'
import { Route, Routes as DOMRoutes } from 'react-router-dom'
import { HomePage } from '@page/home'

export const Routes: FC = () => (
  <DOMRoutes>
    <Route index element={<HomePage />} />
  </DOMRoutes>
)
