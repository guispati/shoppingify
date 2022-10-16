export const defaultTheme = {
    'white': '#FFF',
    'background': '#FAFAFA',
    'base-card': '#F3F2F2',
    'base-input': '#EDEDED',
    'base-button': '#E6E5E5',
    'base-hover': '#D7D5D5',
    'base-label': '#8D8686',
    'base-text': '#574F4D',
    'base-subtitle': '#403937',
    'base-title': '#272221',
  
    'yellow-dark': '#C47F17',
    'yellow': '#DBAC2C',
    'yellow-light': '#F1E9C9',
    'purple-dark': '#4B2995',
    'purple': '#8047F8',
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