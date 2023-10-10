import { FC }             from 'react'

import GlobalStyles       from '@mui/material/GlobalStyles'

import { mabryFontFaces } from './mabry'

export const FontStyles: FC = () => <GlobalStyles styles={[...mabryFontFaces]} />
