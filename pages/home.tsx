import { Table, Loading, ErrorModal } from "../components"
import { useTickers } from "../hooks/useTickers"
import styles from "../styles/home.module.css"


const Home = () => {
	
	const { loading,tickers,error,sortByAscending,sortByDescending} = useTickers()
	return(
		<div className={styles.container}>
			{
				(loading && !error) ?
					<Loading />
					:
					<Table 
						tickers={tickers}
						ascending={(text) => sortByAscending(text)}
						descending={(text) => sortByDescending(text)}
					/>
			}
			{(error && !tickers.length) ? 
				<ErrorModal />
				: 
				null
			}
		</div>
	)
}

export default Home