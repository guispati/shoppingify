import { SocialLoginContainer, SocialWrapper } from "./styled";
import GoogleIcon from '../../../../assets/Google.svg';
import FacebookIcon from '../../../../assets/Facebook.svg';
import TwitterIcon from '../../../../assets/Twitter.svg';
import GithubIcon from '../../../../assets/Github.svg';

export function SocialLogin() {
	return (
		<SocialLoginContainer>
			<p>or continue with these social profile</p>
			
			<SocialWrapper>
				<a href="#"><img src={GoogleIcon} alt="Login com Google" /></a>
				<a href="#"><img src={FacebookIcon} alt="Login com Facebook" /></a>
				<a href="#"><img src={TwitterIcon} alt="Login com Twitter" /></a>
				<a href="#"><img src={GithubIcon} alt="Login com Github" /></a>
			</SocialWrapper>
		</SocialLoginContainer>
	);
}