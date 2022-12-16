import styles from "../styles/modal.module.css"

interface PropsModal {
    handleClick: () => void
}

export const Modal = ({handleClick}: PropsModal) => {
	return(
		<div className={styles.container}>
			<section className={styles.modal}>
				<h3>User or password is wrong</h3>
				<button onClick={handleClick}>Ok</button>
			</section>
		</div>
	)
}