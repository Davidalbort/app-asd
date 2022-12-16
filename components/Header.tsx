import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import Link from "next/link"
import styles from "../styles/header.module.css"



export const Header = () => {
	const auth = useContext(AuthContext)
	return auth?.logged
		? 
		<nav className={styles.container}>
			<a
				href="https://www.grupoasd.com/"
			>
				<img 
					src={'https://www.grupoasd.com/wp-content/uploads/2020/07/logo_170.png'}
					alt={`It's icon of company Asd`}
					width={100}
					height={30}
                
				/>
			</a>

			<Link 
				href={'/'}
				onClick={() => auth.logout()}
                className={styles.link}
			>
                LOGOUT
			</Link>
		</nav>
		:
		<nav className={styles.container}>
			<a
				href="https://www.grupoasd.com/"
			>
				<img 
					src={'https://www.grupoasd.com/wp-content/uploads/2020/07/logo_170.png'}
					alt={`It's icon of company Asd`}
					width={100}
					height={30}
                
				/>
			</a>
			<menu className={styles.menu}>
				<Link
					href={'/'}
                    className={styles.link}
				>
                    MAIN
				</Link>
				<Link
					href={'/login'}
                    className={styles.link}
				>
                    LOGIN
				</Link>
			</menu>
		</nav>
}