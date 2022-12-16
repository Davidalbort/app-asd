import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthProvider'
import { Header } from '../components'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthProvider>
				<Header />
				<Component {...pageProps} />

			</AuthProvider>
		</>
	)
}
