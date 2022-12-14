import React, { useState } from "react"
import { useAuth } from "../hooks"
import { InputValues } from "../types/global"
import { useForm } from "react-hook-form"
import styles from '../styles/login.module.css'
import { Modal } from "../components"

const Login = () => {
	const {auth,validateUser,closeModal,showModal} = useAuth()
	const {register,handleSubmit,formState:{errors}} = useForm<InputValues>()
	return(
		<main className={styles.container_Login}>
			<form onSubmit={handleSubmit((data) => validateUser(data))} className={styles.login}>
				<h1>Login</h1>
				<fieldset className={styles.field}>
					<label htmlFor="email">Email</label>
					<input 
						type="email" 
						{...register("email",{
							required: "This es required",
							minLength: {
								value: 3,
								message: "Min character is 3"
							},
							maxLength: {
								value: 25,
								message: "Max character is 25"
							},
							pattern:{
								value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
								message:"This email is not format valid"
							}
						})
							
						}
						placeholder="Write your email"
					/>
					<span>{errors.email?.message}</span>
				</fieldset>
				<fieldset className={styles.field}>
					<label htmlFor="password">Password</label>
					<input 
						type="password" 
						{...register("password",{
							required: "This is required",
							minLength:{
								value: 8,
								message: "Min characters is 8"
							},
							maxLength:{
								value: 10,
								message: "Max characters is 10"
							},
							pattern:{
								value: /[A-ZÁÉÍÓÚÜÑ]/,
								message: "The password must have an uppercase letter"
							}
						})
						}
						placeholder="Write your password"
					/>
					<span>{errors.password?.message}</span>

				</fieldset>
				<button type="submit">Login</button>
			</form>
			{
				showModal ? 
					<Modal 
						handleClick={closeModal}
					/>
					: null
			}
		</main>
	)
}

export default Login