import { dataHeaderTable } from "../data/Global"
import { Tickers } from "../types/global"
import { HeaderTable } from "./HeaderTable"
import styles from "../styles/table.module.css"
interface PropsTable {
	tickers: Tickers[]
	ascending: (text:string) => void
	descending: (text:string) => void
}

export const Table = ({tickers,ascending,descending}:PropsTable) => {
	return(
		<div className={styles.container}>
			<h1>Table</h1>
			<table className={styles.table}>
				<thead>
					
					<tr className={styles.title}>
						{

							dataHeaderTable.map(data => (
								<HeaderTable 
									title={data.title}
									increment={() => ascending(data.title)}
									decrement={() => descending(data.title)}
									key={data.title}
								/>
							))
						}
					</tr>
					
				</thead>
				<tbody>
					{
						tickers.map((ticker) => (
							<tr className={styles.content} key={ticker.symbol}>
								<td className={styles.itemContent}>{ticker.symbol}</td>
								<td className={styles.itemContent}>{ticker.quoteAsset}</td>
								<td className={styles.itemContent}>{ticker.openPrice}</td>
								<td className={styles.itemContent}>{ticker.lowPrice}</td>
								<td className={styles.itemContent}>{ticker.highPrice}</td>
								<td className={styles.itemContent}>{ticker.lastPrice}</td>
								<td className={styles.itemContent}>{ticker.at}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

