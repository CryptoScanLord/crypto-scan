import type { FC }         from 'react'
import      { useState }   from 'react'

import      Box            from '@mui/material/Box'
import      Paper          from '@mui/material/Paper'
import      MuiTable       from '@mui/material/Table'
import      TableBody      from '@mui/material/TableBody'
import      TableCell      from '@mui/material/TableCell'
import      TableContainer from '@mui/material/TableContainer'
import      TableHead      from '@mui/material/TableHead'
import      TableRow       from '@mui/material/TableRow'
import      Typography     from '@mui/material/Typography'

import      { Search }     from '@ui/search'

import      { Pagination } from './pagination.component'
import type { TableProps } from './table.interface'

export const Table: FC<TableProps> = ({ data, headerCells, title, subtitle }) => {
	const [rowsPerPage] = useState(7)
	const [searchQuery, setSearchQuery] = useState('')
	const [page, setPage] = useState(1)

	const handleSearchQueryChange = (value: string) => {
		setSearchQuery(value)
	}

	const filteredData = data.filter((item) =>
		Object.values(item).some((value) => {
			if (typeof value === 'string' && value?.startsWith('https')) {
				return false
			}
			return value.toString().toLowerCase().includes(searchQuery.toLowerCase())
		}))
	const transformedData = filteredData.map((elem, index) => ({ id: index, ...elem }))

	return (
		<Box display='flex' width='100%' flexDirection='column' justifyContent='space-between'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Box mb='5px'>
					<Typography fontWeight='900' variant='h4'>
						{title}
					</Typography>
					<Typography color='#616787'>{subtitle}</Typography>
				</Box>
				<Search value={searchQuery} handleChange={handleSearchQueryChange} />
			</Box>
			<TableContainer component={Paper}>
				<MuiTable>
					<TableHead>
						<TableRow>
							{headerCells.map((item) => (
								<TableCell key={item} align='left'>
									{item}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						<>
							{transformedData.length === 0 ? (
								<TableRow>
									<TableCell sx={{ textAlign: 'center', height: '200px', borderBottom: 'none' }} colSpan={10}>
										<Box>No Data</Box>
									</TableCell>
								</TableRow>
							) : null}
							{(rowsPerPage > 0
								? transformedData.slice((page - 1) * rowsPerPage, page * rowsPerPage)
								: transformedData
							).map((item) => (
								<TableRow key={item.id}>
									{Object.entries(item).map(([key, value]) =>
										key !== 'id' ? (
											<TableCell key={key}>
												{typeof value === 'string' && (value as string).startsWith('https') ? (
													<img src={value} width='35px' height='35px' alt='' />
												) : (
													value
												)}
												{typeof value === 'function' && value}
											</TableCell>
										) : null)}
								</TableRow>
							))}
						</>
					</TableBody>
				</MuiTable>
			</TableContainer>
			{transformedData.length > 0 ? <Pagination rows={data} rowsPerPage={rowsPerPage} setPage={setPage} /> : null}
		</Box>
	)
}
