import Link from "next/link"
import styles from "../styles/mainComponent.module.css"

export const Main = () => {
	const gitHub = "https://github.com/Davidalbort"
	return (
		<main className={styles.container}>
			<h1>Main</h1>
			<section className={styles.section}>
				<h3>Challenge of ASD for Frontend Developer</h3>
				<p>Hello everyone, My name is <a href={gitHub}>ROGER DAVID ALBA ORTEGA. </a>
					I am a software engineer as Frontend, 
					I love challenges and teamwork and 
					this is my solution to this challenge, 
					I hope to meet the expectations of the challenge.
				</p>


			</section>
			<Link
				href={"/login"}
			>
				<button className={styles.button}>
					Start
				</button>
			</Link>
			

		</main>
	)
}