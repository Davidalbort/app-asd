
import { useTickers } from "../hooks/useTickers"
import styles from "../styles/modalError.module.css"



export const ErrorModal = () => {
	const {resetError} = useTickers()
	return(
		<div className={styles.container}>
			<section className={styles.modal}>
				<h3>There was error</h3>

				<button onClick={() => resetError()} >Try again</button>
			</section>
		</div>
	)
}