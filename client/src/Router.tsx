import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

export function Router() {
    return (
		<AuthContextProvider>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/">
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</AuthContextProvider>
    );
}