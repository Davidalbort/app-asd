import Image from "next/image"
import styles from "../styles/headerTable.module.css"

interface PropsHeaderTable {
    title: string
    increment: () => void
    decrement: () => void

}

export const HeaderTable = ({title,increment,decrement}: PropsHeaderTable) => {
	return (
		<th className={styles.container}>
			<section>
				<span>{title}</span>
				<figure>
					<Image 
						src={'/../public/arrow-narrow-up.png'}
						alt="image of arrow down"
						width={10}
						height={10}
						onClick={increment}
						className={styles.icon}
						color={"#FFFF"}
						style= {{color: "#CCCC"}}
					/>
					<Image 
						src={'/../public/arrow-narrow-down.png'}
						alt="image of arrow down"
						width={10}
						height={10}
						onClick={decrement}
						className={styles.icon}
					/>
				</figure>

			</section>
		</th>
	)
}