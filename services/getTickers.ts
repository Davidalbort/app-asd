import { TickersFromApi } from "../types/services"

export const getTickers = ():Promise<TickersFromApi[]> => {
	const api = 'https://api.wazirx.com/sapi/v1/tickers/24hr'
	return fetch(api,{
		method: 'GET',
	}).then( response => {
		if(!response.ok) throw new Error('Response is not ok')
		return response.json()
	})
}