import { Tokens } from './publicTypes.js'

interface Data {
	height: number
	total: number
	start: number
	detail: Tokens[]
}

export interface Res {
	code: number
	msg: string
	data: Data
}
