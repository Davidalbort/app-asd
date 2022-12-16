import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider"
import { getTickers } from "../services/getTickers"
import { Tickers } from "../types/global"
import { TickersFromApi, TickersFromApiShort } from "../types/services"

interface StateUseTickers {
    loading: boolean
    error: string
    tickers: Tickers[]
}

export const useTickers = () => {
	const auth = useContext(AuthContext)
	const router = useRouter()
	const [loading,setLoading] = useState<StateUseTickers["loading"]>(false)
	const [error,setError] = useState<StateUseTickers["error"]>("")
	const [tickers,setTickers] = useState<StateUseTickers["tickers"]>([])
	useEffect(() => {
		if(!auth?.logged) router.push("/login")
		if(!error && !tickers){

			setLoading(true)
			getTickers()
				.then(apiTickers => {
					const tickers = mapFromApiToTickers(apiTickers)
					const newTickers = changeAtToDate(tickers)
					setTickers(newTickers)
					setLoading(false)
				})
				.catch(error => {
					setLoading(false)
					setError(error)
				})
		}
	},[tickers])

	const mapFromApiToTickers = (apiResponse:TickersFromApi[]):TickersFromApiShort[]=> {
		return apiResponse.map((tickersFromAPi) => {
			const {
				symbol,
				quoteAsset,
				openPrice,
				lowPrice,
				highPrice,
				lastPrice,
				at
			}= tickersFromAPi
			
			return {
				symbol,
				quoteAsset,
				openPrice,
				lowPrice,
				highPrice,
				lastPrice,
				at
			}
		})
	}

	const changeAtToDate = (tickers:TickersFromApiShort[]):Tickers[] => {
		const newTickers = tickers.map((ticker) => {
			const date = new Date (ticker.at)
			const newAt = date.toLocaleDateString()
			return{...ticker,at:newAt}
		})
        
		return newTickers
	}
	const sortByAscending = (text:string):void => {
		const sortTickers = [...tickers]
		switch (text){
		case "Symbol":{
			sortTickers.sort((a,b) => sortTextAscending(a.symbol,b.symbol))
			setTickers(sortTickers)
			break
		}
		case "quoteAsset":{
			sortTickers.sort((a,b) => sortTextAscending(a.quoteAsset,b.quoteAsset))
			setTickers(sortTickers)
			break
		}
		case "OpenPrice":{
			sortTickers.sort((a,b) => sortNumberAscending(Number(a.openPrice),Number(b.openPrice)))
			setTickers(sortTickers)
			break
		}
		case "LowPrice":{
			sortTickers.sort((a,b) => sortNumberAscending(Number(a.lowPrice),Number(b.lowPrice)))
			setTickers(sortTickers)
			break
		}
		case "HighPrice":{
			sortTickers.sort((a,b) => sortNumberAscending(Number(a.highPrice),Number(b.highPrice)))
			setTickers(sortTickers)
			break
		}
		case "LastPrice":{
			sortTickers.sort((a,b) => sortNumberAscending(Number(a.lastPrice),Number(b.lastPrice)))
			setTickers(sortTickers)
			break
		}
		case "At":{
			sortTickers.sort((a,b) => sortNumberAscending(Number(a.at),Number(b.at)))
			setTickers(sortTickers)
			break
		}
		}
	}
	const sortByDescending = (text:string) => {
		const sortTickers = [...tickers]
		switch(text){
		case "Symbol":{
			sortTickers.sort((a,b) => sortTextDescending(a.symbol,b.symbol))
			setTickers(sortTickers)
			break
		}
		case "quoteAsset":{
			sortTickers.sort((a,b) => sortTextDescending(a.quoteAsset,b.quoteAsset))
			setTickers(sortTickers)
			break
		}
		case "OpenPrice":{
			sortTickers.sort((a,b) => sortNumberDescending(Number(a.openPrice),Number(b.openPrice)))
			setTickers(sortTickers)
			break
		}
		case "LowPrice":{
			sortTickers.sort((a,b) => sortNumberDescending(Number(a.lowPrice),Number(b.lowPrice)))
			setTickers(sortTickers)
			break
		}
		case "HighPrice":{
			sortTickers.sort((a,b) => sortNumberDescending(Number(a.highPrice),Number(b.highPrice)))
			setTickers(sortTickers)
			break
		}
		case "LastPrice":{
			sortTickers.sort((a,b) => sortNumberDescending(Number(a.lastPrice),Number(b.lastPrice)))
			setTickers(sortTickers)
			break
		}
		case "At":{
			sortTickers.sort((a,b) => sortNumberDescending(Number(a.at),Number(b.at)))
			setTickers(sortTickers)
			break
		}
		}
	}
	const  sortTextAscending =  (text1:string,text2:string)=> {
		if(text1<text2){
			return -1
		}
		if(text1>text2){
			return 1
		}
		return 0
	}
	const  sortTextDescending =  (text1:string,text2:string)=> {
		if(text1<text2){
			return 1
		}
		if(text1>text2){
			return -1
		}
		return 0
	}
	const sortNumberAscending = (number1:number,number2:number) => {
		if(number1<number2){
			return -1
		}
		if(number1>number2){
			return 1
		}
		return 0
	}
	const sortNumberDescending = (number1:number,number2:number) => {
		if(number1<number2){
			return 1
		}
		if(number1>number2){
			return -1
		}
		return 0
	}
	const resetError = () => {
		setError("")
		setTickers([])
	}
	return {loading,error,tickers,sortByAscending,sortByDescending,resetError}
}

