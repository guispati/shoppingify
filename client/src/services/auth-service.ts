import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/users/";

class AuthService {
	async login(email: string, password: string) {
		return axios
		.post(API_URL + "login", {
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

	logout() {
		localStorage.removeItem("user");
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user')!);
	}
}

export default new AuthService();