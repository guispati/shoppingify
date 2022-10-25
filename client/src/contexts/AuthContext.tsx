import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
	email: string;
	name: string;
	photo: string;
	role: string;
}

interface Auth {
    user: User | null;
	login: (email: string, password: string) => Promise<void>;
	signup: (name: string, email: string, password: string, passwordConfirm: string) => Promise<void>;
	logout: () => void;
}

export const AuthContext = createContext({} as Auth);

interface AuthContextProviderProps {
	children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const API_URL = `${import.meta.env.VITE_API_URL}/users/`;
	
	const [user, setUser] = useState<User | null>(() => {
		const user = localStorage.getItem("token");
		if (user) {
			return JSON.parse(user);
		}
		return null;
	});

	const login = async (email: string, password: string) => {
		const token = await axios.post(API_URL + "login", {
			email,
			password
		})
		.then(response => {
			if (response.data.token) {
				localStorage.setItem("token", JSON.stringify(response.data.token));
			}

			console.log(response);

			return response.data;
		});

		setUser(token);
	};

	const signup = async (name: string, email: string, password: string, passwordConfirm: string) => {
		const token = await axios.post(API_URL + "signup", {
			name,
			email,
			password,
			passwordConfirm
		})
		.then(response => {
			if (response.data.token) {
				localStorage.setItem("token", JSON.stringify(response.data.token));
			}

			return response.data;
		});

		setUser(token);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	useEffect(() => {
		
	}, []);

	return (
		<AuthContext.Provider value={{ user, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	);
}