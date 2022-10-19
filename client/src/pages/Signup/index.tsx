import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { EnvelopeSimple, IdentificationCard, LockSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { SignupBox, SignupContainer } from "./styles";
import authService from '../../services/auth-service';
import { LoginInput } from '../../components/LoginInput';
import { LoginButton } from '../../components/LoginButton';
import { useAuth } from '../../hooks/useAuth';

const signupFormValidationSchema = zod.object({
	name: zod.string(),
	email: zod.string().email(),
	password: zod.string().min(8),
	passwordConfirm: zod.string().min(8),
}).superRefine(({ passwordConfirm, password }, ctx) => {
	if (passwordConfirm !== password) {
		ctx.addIssue({
			code: "custom",
			message: "The passwords did not match"
		});
	}
});

export type SignupFormData = zod.infer<typeof signupFormValidationSchema>;

export function Signup() {
	const { signup } = useAuth();
	const signupForm = useForm<SignupFormData>({
        resolver: zodResolver(signupFormValidationSchema),
        defaultValues: {
			name: '',
            email: '',
			password: '',
			passwordConfirm: '',
        }
    });

	const { handleSubmit } = signupForm;

	const navigate = useNavigate();

	async function handleSignup(data: SignupFormData) {
		await signup(data.name, data.email, data.password, data.passwordConfirm).then(() => {
			navigate('/');
		});
	}

	return (
		<SignupContainer>
			<SignupBox>
				<img src={logo} alt="" />
				<h1>Signup</h1>

				<FormProvider {...signupForm}>
					<form onSubmit={handleSubmit(handleSignup)}>
						<LoginInput id="name" inputName='name' prefix={<IdentificationCard size={20} />} type="text" placeholder="Name" />
						<LoginInput id="email" inputName='email' prefix={<EnvelopeSimple size={20} />} type="email" placeholder="Email" />
						<LoginInput id="password" inputName='password' prefix={<LockSimple size={20} />} type="password" placeholder="Password" />
						<LoginInput id="passwordConfirm" inputName='passwordConfirm' prefix={<LockSimple size={20} />} type="password" placeholder="Password Confirm" />

						<LoginButton type="submit">Create your account</LoginButton>
					</form>
				</FormProvider>
			</SignupBox>
		</SignupContainer>
	);
}