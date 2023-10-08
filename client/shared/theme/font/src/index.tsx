import GlobalStyles from '@mui/material/GlobalStyles'
import { FC } from 'react'
import { mabryFontFaces } from './mabry'

export const FontStyles: FC = () => <GlobalStyles styles={[...mabryFontFaces]} />
