import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/users/`;

class AuthService {
	async login(email: string, password: string) {
		return axios.post(API_URL + "login", {
			email,
			password
		})
		.then(response => {
			if (response.data.token) {
				localStorage.setItem("user", JSON.stringify(response.data.data.user));
			}

			return response.data;
		});
	}

	async signup(name: string, email: string, password: string, passwordConfirm: string) {
		return axios.post(API_URL + "signup", {
			name,
			email,
			password,
			passwordConfirm
		})
		.then(response => {
			if (response.data.token) {
				localStorage.setItem("user", JSON.stringify(response.data.data.user));
			}

			return response.data;
		});
	}

	logout() {
		localStorage.removeItem("user");
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user')!);
	}
}

export default new AuthService();