import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mempool.space/api',
})
