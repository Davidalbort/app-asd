import { TickersFromApi } from "../types/services"

export const getTickers = async():Promise<TickersFromApi[]> => {
	const api = "https://api.wazirx.com/sapi/v1/tickers/24hr"
	const response = await fetch(api,{
		method: "GET",
		headers: {}
	})
	
	if(!response.ok)throw new Error("This is a Error")
	const data = await response.json()
	return data

}