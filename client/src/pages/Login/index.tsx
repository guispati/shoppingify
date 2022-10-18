import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { EnvelopeSimple, LockSimple } from 'phosphor-react';

import { LoginBox, LoginContainer } from "./styles";
import logo from '../../assets/logo.svg';
import { LoginInput } from '../../components/LoginInput';
import { LoginButton } from '../../components/LoginButton';
import { SocialLogin } from './components/SocialLogin';
import AuthService from "../../services/auth-service";
import { useNavigate } from 'react-router-dom';

const loginFormValidationSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
});

export type LoginFormData = zod.infer<typeof loginFormValidationSchema>;

export function Login() {
	const loginForm = useForm<LoginFormData>({
        resolver: zodResolver(loginFormValidationSchema),
        defaultValues: {
            email: '',
			password: '',
        }
    });

	const { handleSubmit } = loginForm;

	const navigate = useNavigate();

	async function handleLogin(data: LoginFormData) {
		await AuthService.login(data.email, data.password).then(() => {
			navigate('/', {state: data});
		});
	}

	return (
		<LoginContainer>
			<LoginBox>
				<img src={logo} alt="" />
				<h1>Login</h1>

				<FormProvider {...loginForm}>
					<form onSubmit={handleSubmit(handleLogin)}>
						<LoginInput id="email" inputName='email' prefix={<EnvelopeSimple size={20} />} type="email" placeholder="Email" />
						<LoginInput id="password" inputName='password' prefix={<LockSimple size={20} />} type="password" placeholder="Password" />

						<LoginButton type="submit">Login</LoginButton>
					</form>
				</FormProvider>

				<SocialLogin />

				<p>Don't have an account yet? <a href="/signup">Register</a></p>
			</LoginBox>
		</LoginContainer>
	);
}