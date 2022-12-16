import { Table, Loading } from "../components"
import { useTickers } from "../hooks/useTickers"
import styles from "../styles/home.module.css"


const Home = () => {
	
	const { loading,tickers,error,sortByAscending,sortByDescending} = useTickers()
	return(
		<div className={styles.container}>
			{
				loading ?
					<Loading />
					:
					<Table 
						tickers={tickers}
						ascending={(text) => sortByAscending(text)}
						descending={(text) => sortByDescending(text)}
					/>
			}
			
		</div>
	)
}

export default Home