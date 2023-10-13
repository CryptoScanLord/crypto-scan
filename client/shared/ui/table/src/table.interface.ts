export interface TableProps {
	data: Record<string, string | number | JSX.Element>[]
	headerCells: string[]
	title: string
	subtitle: string
}
