export const defaultTheme = {
    'white': '#FFF',
	'black': '#000',
	
	/* Login & Signup pages */
	'login-title': '#333',
	'login-button': '#2F80ED',
	'login-blue-text': '#2D9CDB',
	
	/* User menu */
	'menu-text': '#4F4F4F',
	'menu-profile-background': '#F2F2F2',
	'menu-separator': '#E0E0E0',
	
    'base-background': '#FAFAFE',
    'base-text': '#828282',
    'base-title': '#34333A',
	'base-placeholder': '#BDBDBD',
	'base-icons': '#34333A',
	'base-date': '#C1C1C4',
	'base-popup': '#454545',

	'list-background': '#FFF0DE',
	
	'red': '#EB5757',
	'blue': '#56CCF2',
    'yellow-dark': '#C47F17',
    'yellow': '#F9A109',
    'yellow-light': '#F1E9C9',
    'purple-dark': '#4B2995',
    'purple': '#80485B',
    'purple-light': '#EBE5F9',
}

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
};

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
};