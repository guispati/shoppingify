import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthContextProvider } from './contexts/AuthContext';
import { DefaultLayout } from './layouts/DefaultLayout';
import { History } from './pages/History';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Statistics } from './pages/Statistics';

export function Router() {
    return (
		<AuthContextProvider>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<DefaultLayout />}>
					<Route index path="/" element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}/>
					<Route path="history" element={
						<ProtectedRoute>
							<History />
						</ProtectedRoute>
					}/>
					<Route path="statistics" element={
						<ProtectedRoute>
							<Statistics />
						</ProtectedRoute>
					}/>
				</Route>
			</Routes>
		</AuthContextProvider>
    );
}