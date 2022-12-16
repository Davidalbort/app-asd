import Head from "next/head"
import { Main } from "../components"
import  styles from "../styles/mainPage.module.css"


export default function Home() {
	return (
		<div className={styles.container} >
			<Head>
				<meta name="description" content="solucion de la prueba tecnica ASD" />
				<title>ASD</title>
				<meta property="og:locale" content="es" />
				<meta property="og:type" content="WebPage" />
				<meta property="og:title" content="solucion de la prueba tecnica ASD" />
				<meta property="og:description" content="solucion de la prueba tecnica ASD" />
				<meta property="og:image" content="https://www.grupoasd.com/wp-content/uploads/2022/12/gobierno1-1.png" />
				<meta property="og:site_name" content="ASD" />
				<meta property="og:url" content="https://www.grupoasd.com/" />
				<link rel="canonical" href="https://www.grupoasd.com/" />
				<link rel="icon" href="/asd.png" />
			</Head>

			<Main />
		</div>
	)
}
