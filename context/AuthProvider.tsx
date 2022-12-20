import React, {useState} from "react"
import { useRouter } from "next/router"
import { InputValues } from "../types/global"
import { useTickers } from "../hooks/useTickers"

const DATA_USER = {
	email: "grupoASD@gmail.com",
	password: "Rjs2022*",
}

interface AuthContext {
    validateUser: (input:InputValues) => void
    closeModal: () => void
    logout: () => void
    logged: StateAuthProvider["auth"]
    showModal: StateAuthProvider["modal"]
}

const AuthContext = React.createContext<AuthContext | null>(null)

interface PropsAuthProvider {
    children: React.ReactNode
}

interface StateAuthProvider {
    auth: boolean
	modal: boolean
}

export function AuthProvider ({children}: PropsAuthProvider) {
	const router= useRouter()
	const [logged,setLogged]= useState<StateAuthProvider["auth"]>(false)
	const [showModal,setShowModal]= useState<StateAuthProvider["modal"]>(false)
	const validateUser = (input: InputValues) => {
		if( input.email === DATA_USER.email && input.password === DATA_USER.password){
			setLogged(true)
			saveUser(input)
			router.push("/home")

		}else{
			setShowModal(true)
		}
	}
	const closeModal = () => {
		setShowModal(false)
	}
	const logout = () => {
		localStorage.clear()
		setTimeout(() => {

			setLogged(false)
		},100)
	}
	const saveUser = (dataUser: InputValues) => {
		localStorage.setItem("user",JSON.stringify(dataUser))
	}
	const auth : AuthContext = {
		validateUser: validateUser,
		closeModal: closeModal,
		logout: logout,
		logged: logged,
		showModal: showModal
	}
	return<AuthContext.Provider value={auth} >{children}</AuthContext.Provider>
}

export { AuthContext }